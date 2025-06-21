# 🐳 Docker Workflow for Syncing and Replacing Code Inside a Container

This guide explains how to:

* Copy your local `blockchain` directory to a running Docker container on a remote server
* Overwrite the container’s internal code under `/app/src/blockchain`
* Restart the container to reflect changes
* Understand where changes live and what happens when you commit them
* Find the most recent container ID
* Use JupyterLab in a Docker-based workflow
* Find your Docker username, image name, and tag

---

## 📁 What You’re Trying to Do

You are copying the contents of:

```
/Users/mollybeach/Documents/git/neuronet-consensus/src/blockchain
```

Into:

```
Inside container: /app/src/blockchain
Container ID: 77061197fe23
```

This replaces all blockchain logic inside the container.

---

## 🔍 How to Find the Most Recent Container ID

Run the following command to list running containers sorted by creation time:

```bash
docker ps -l
```

To see all containers (including stopped ones) ordered by time:

```bash
docker ps -a --format "table {{.ID}}\t{{.Status}}\t{{.Image}}\t{{.Names}}" --no-trunc
```

Look for the container with the most recent `Up` or `Created` time.

---

## 🔐 How to Find Your Docker Username

Your Docker Hub username is typically the one you signed up with. You can check it by running:

```bash
docker info | grep Username
```

Or log in explicitly to confirm:

```bash
docker login
```

It will ask for your Docker Hub username and password.

---

## 🏷️ How to View Local Images and Their Names/Tags

To list all Docker images on your machine:

```bash
docker images
```

You’ll see something like:

```
REPOSITORY                 TAG        IMAGE ID       CREATED         SIZE
blueberrybeach/blockchain-updated  latest     abc1234        2 minutes ago   1.5GB
ubuntu                    20.04      def5678        3 weeks ago     72MB
```

* **REPOSITORY** is the image name (e.g. `blueberrybeach/blockchain-updated`)
* **TAG** is the version label (e.g. `latest`)
* **IMAGE ID** is the unique identifier for the image

---

## 🧩 How Docker Commit Works

When you modify files inside a Docker container, the changes exist **only in the container's writable layer**. If you want to persist those changes into a new Docker image, you need to run:

```bash
sudo docker commit 77061197fe23 blueberrybeach/blockchain-updated
```

This creates a new image with your current container state. You can later run it with:

```bash
sudo docker run -it blueberrybeach/blockchain-updated
```

If you **don’t commit**, changes will disappear when the container is deleted or recreated.

---

## 🛠️ Option 1 – Copy Directly From Mac to Running Container

This is the fastest way to replace `/app/src/blockchain` in the container.

### ✅ Command:

```bash
docker cp /Users/mollybeach/Documents/git/neuronet-consensus/src/blockchain/. 77061197fe23:/app/src/blockchain
```

> This directly replaces the blockchain folder *inside* the running container.

### 🔄 Then Restart the Container:

```bash
sudo docker restart 77061197fe23
```

---

## 🔁 Option 2 – Full Remote Flow with `scp` and `docker cp`

Use this if you're syncing files from your **Mac → Remote Server → Docker Container**.

### 📥 Step 1: Copy to Remote Host

```bash
scp -r /Users/mollybeach/Documents/git/neuronet-consensus/src/blockchain ubuntu@192.222.54.82:/home/ubuntu/temp_blockchain
```

You can also copy files individually:

```bash
scp /Users/mollybeach/Documents/git/neuronet-consensus/src/blockchain/README.md ubuntu@192.222.54.82:/home/ubuntu/temp_blockchain/README.md
scp /Users/mollybeach/Documents/git/neuronet-consensus/src/blockchain/client.py ubuntu@192.222.54.82:/home/ubuntu/temp_blockchain/client.py
```

And copy directories:

```bash
scp -r /Users/mollybeach/Documents/git/neuronet-consensus/src/blockchain/contracts ubuntu@192.222.54.82:/home/ubuntu/temp_blockchain/contracts
```

---

### 🖥️ Step 2: SSH into the Remote Host

```bash
ssh ubuntu@192.222.54.82
```

---

### 🐳 Step 3: Copy to Docker Container

```bash
sudo docker cp /home/ubuntu/temp_blockchain/. 77061197fe23:/app/src/blockchain
```

---

### 🧹 Step 4: Cleanup (Optional)

```bash
rm -rf /home/ubuntu/temp_blockchain
```

---

## ✏️ Make Edits Inside Docker

If you want to directly edit files inside the running container:

On **JupyterLab** (inside a Docker container with Jupyter running) or after **SSHing into the server**, run:

```bash
sudo docker exec -it 77061197fe23 /bin/bash
```

Then navigate to the appropriate directory:

```bash
cd /app/src/blockchain
```

If JupyterLab is being used to manage notebooks or scripts that rely on this directory, remember that editing from a Jupyter interface may not show up unless the container has been updated with the latest source files.

---

## 🧨 What Happened

You made changes inside a running Docker container — meaning:

* Your edits lived only in the container’s writable layer.
* They were not saved to the image (no `docker commit`).
* They were also not copied back to your local machine (no `docker cp` out).

Then, one of the following happened:

1. **Your coworker rebuilt or restarted the container** (e.g. via `docker-compose up --build` or `docker run` again):

   * This replaced the container with a new one based on the original image.
   * Your uncommitted changes were destroyed because Docker doesn’t preserve the writable layer on rebuilds or restarts from scratch.

2. **Your coworker copied their own files into the container** using `docker cp`, `scp`, or mounted volumes:

   * Their files overwrote yours, and since your changes weren’t committed or backed up, they’re gone.

---

## 💡 How to Prevent This in the Future

### ✅ Best Practices:

**Commit your container changes if they’re valuable:**

```bash
docker commit <container_id> my-image-with-changes
```

**Or copy your modified files back out:**

```bash
docker cp <container_id>:/app/src/blockchain/. ./local_backup/
```

**Use volume mounts for development, so all edits happen on your host machine:**

```yaml
volumes:
  - ./src:/app/src
```

---

## 🧠 Notes on Editing Remote Files

If you’re editing config files directly on the remote host:

```bash
ssh fudgy-h100
sudo nano /opt/neuronet/config/evm_config.json
```

Use `nano` for quick edits, or `vim` if you're comfortable with advanced terminal editors.

---

## 💡 Tips

* Always restart the container after copying new code.
* If your edits don’t show up, make sure you're not overwriting a **volume mount**.
* If your changes are final, consider using `docker commit` to save the state.
* Use `docker ps` to confirm the container ID and name before copying files.
* Always double-check the destination path: you are copying **into** the container.

---

## 🧪 Verify Changes

Once inside the container:

```bash
sudo docker exec -it 77061197fe23 /bin/bash
cd /app/src/blockchain
ls
```

Ensure your latest files are present.

---

## ✅ Done!

This setup ensures you can edit locally, deploy remotely, and have your changes live inside the running Docker environment.
