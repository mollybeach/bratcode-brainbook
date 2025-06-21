# 🐳 Docker Workflow for Syncing and Replacing Code Inside a Container

## 📚 Table of Contents

* [🧰 Getting Started with Docker](#-getting-started-with-docker)
* [📂 Objective: Sync Local Code Into a Docker Container](#-objective-sync-local-code-into-a-docker-container)
* [🔍 How to Find the Most Recent Container ID](#-how-to-find-the-most-recent-container-id)
* [🔐 How to Find Your Docker Username](#-how-to-find-your-docker-username)
* [🏷️ How to View Local Images and Their Names/Tags](#-how-to-view-local-images-and-their-namestags)
* [🧩 How Docker Commit Works](#-how-docker-commit-works)
* [🛠️ Option 1 – Copy Directly From Mac to Running Container](#️-option-1--copy-directly-from-mac-to-running-container)
* [🔁 Option 2 – Full Remote Flow with `scp` and `docker cp`](#-option-2--full-remote-flow-with-scp-and-docker-cp)
* [✏️ Make Edits Inside Docker](#-make-edits-inside-docker)
* [🧨 What Happened](#-what-happened)
* [💡 How to Prevent This in the Future](#-how-to-prevent-this-in-the-future)
* [🧠 Notes on Editing Remote Files](#-notes-on-editing-remote-files)
* [💡 Tips](#-tips)
* [🧪 Verify Changes](#-verify-changes)
* [✅ Done!](#-done)

---

## 🧰 Getting Started with Docker

### 🔧 Install Docker

* [Download Docker Desktop](https://www.docker.com/products/docker-desktop/) for Mac, Windows, or Linux.

### 📦 Core Concepts

* **Images**: Snapshots of a filesystem and instructions to run a container
* **Containers**: Running instances of images
* **Volumes**: Persistent data mounted into containers
* **Dockerfile**: Recipe to build a Docker image
* **Docker Hub**: Cloud registry to store/share images (like GitHub for containers)

### 🚀 Common Commands

```bash
# Check Docker is installed
docker --version

# View running containers
docker ps

# View all containers (including stopped ones)
docker ps -a

# Build an image from a Dockerfile
docker build -t blueberrybeach/my-app .

# Run a container from an image
docker run -it --name my-container blueberrybeach/my-app

# Stop a container
docker stop <container_id>

# Remove a container
docker rm <container_id>

# Remove an image
docker rmi <image_id>
```

---

## 📂 Objective: Sync Local Code Into a Docker Container

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

To ensure the container reflects your local changes:

1. Use `docker cp` to transfer files from host → container
2. Restart the container to reload the state
3. Optionally `docker commit` to save the container state as a new image

More robust workflows may use volumes or CI/CD pipelines for automation.

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

### 📜 Or Find Container by Viewing Logs

```bash
docker ps -a
```

Then for each container ID, run:

```bash
docker logs <container_id>
```

Or grep logs across all containers:

```bash
for id in $(docker ps -aq); do echo "Checking $id"; docker logs $id 2>&1 | grep 'keyword'; done
```

Replace `'keyword'` with something specific to your use case (e.g. `model`, `inference`).

---

## 🔐 How to Find Your Docker Username

```bash
docker info | grep Username
```

Or log in explicitly:

```bash
docker login
```

> ✅ Your Docker Hub username is `blueberrybeach`

---

## 🏷️ How to View Local Images and Their Names/Tags

```bash
docker images
```

Example output:

```
REPOSITORY                       TAG        IMAGE ID       CREATED         SIZE
blueberrybeach/blockchain-updated  latest     abc1234        2 minutes ago   1.5GB
ubuntu                          20.04      def5678        3 weeks ago     72MB
```

---

## 🧩 How Docker Commit Works

Changes in a running container live in the writable layer and will be lost unless committed:

```bash
docker commit 77061197fe23 blueberrybeach/blockchain-updated
```

Run the new image with:

```bash
docker run -it blueberrybeach/blockchain-updated
```

---

## 🛠️ Option 1 – Copy Directly From Mac to Running Container

```bash
docker cp /Users/mollybeach/Documents/git/neuronet-consensus/src/blockchain/. 77061197fe23:/app/src/blockchain
sudo docker restart 77061197fe23
```

---

## 🔁 Option 2 – Full Remote Flow with `scp` and `docker cp`

```bash
scp -r /Users/mollybeach/Documents/git/neuronet-consensus/src/blockchain ubuntu@192.222.54.82:/home/ubuntu/temp_blockchain
ssh ubuntu@192.222.54.82
sudo docker cp /home/ubuntu/temp_blockchain/. 77061197fe23:/app/src/blockchain
rm -rf /home/ubuntu/temp_blockchain  # optional cleanup
```

---

## ✏️ Make Edits Inside Docker

```bash
sudo docker exec -it 77061197fe23 /bin/bash
cd /app/src/blockchain
```

---

## 🧨 What Happened

If you lost changes:

* You edited inside a container but didn’t commit or back up.
* The container was restarted, rebuilt, or overwritten.

---

## 💡 How to Prevent This in the Future

```bash
docker commit <container_id> my-image-name
```

Or copy out your edits:

```bash
docker cp <container_id>:/app/src/blockchain/. ./backup_blockchain/
```

Or use a bind mount:

```yaml
volumes:
  - ./src:/app/src
```

---

## 🧠 Notes on Editing Remote Files

```bash
ssh fudgy-h100
sudo nano /opt/neuronet/config/evm_config.json
```

---

## 💡 Tips

* Always restart containers after `docker cp`
* Use `docker ps` to inspect active containers
* Back up critical changes

---

## 🧪 Verify Changes

```bash
sudo docker exec -it 77061197fe23 /bin/bash
ls /app/src/blockchain
```

---

## ✅ Done!

You’ve now copied, verified, and persisted changes inside a running Docker container. ✅


# ✅ What You Ran on Remote (fudgy-h100)

```bash
sudo docker ps -a
```

This shows the most recently created container — in your case:

CONTAINER ID   IMAGE                       ...   STATUS: Exited (0) 4 weeks ago
NAMES: lcai-testnet-node-geth-1

➡️ So nothing is running locally right now — that Geth container exited 4 weeks ago.


That shows all containers (running or stopped) on the remote server, and here’s what you’ve got:

| Container ID | Image                                 | Name                     | Status            |
| ------------ | ------------------------------------- | ------------------------ | ----------------- |
| db6c0801658a | neuronet-precompile2                  | neuronet-precompile2-new | ✅ Up 12 hours     |
| e76bd8d52bbb | neuronet-consensus-precompile\:latest | neuronet-precompile2     | Exited 12 hrs ago |
| 77061197fe23 | neuronet-consensus-precompile\:latest | neuronet-precompile      | Exited 13 hrs ago |


# 🧠 What to Do Now
To copy code into the running container, use the container ID:

``` bash
sudo docker cp /home/ubuntu/temp_blockchain/. db6c0801658a:/app/src/blockchain
```

Or by using the container name:

``` bash
sudo docker cp /home/ubuntu/temp_blockchain/. neuronet-precompile2-new:/app/src/blockchain
```
Then restart the container:
``` bash
sudo docker restart db6c0801658a
# OR
sudo docker restart neuronet-precompile2-new
```
---

## 📸 Committing the Container to a Docker Image

If you've made valuable changes inside a running container (via `docker exec`, Jupyter edits, etc.) and want to **preserve** them, you can commit the container to a new image.

### ✅ Step 1: Find the Container ID or Name

You already know the container name is:

```bash
neuronet-precompile2-new
```

Or its ID:

```bash
db6c0801658a
```

### ✅ Step 2: Commit the Container to a New Image
Run this command to save the current state as a Docker image:

```bash
sudo docker commit db6c0801658a blueberrybeach/neuronet-precompile2:v1
```

Or using the container name:

```bash
sudo docker commit neuronet-precompile2-new blueberrybeach/neuronet-precompile2:v1
```

This creates a new image called blueberrybeach/neuronet-precompile2 with a tag v1.

### ✅ Step 3: Verify the New Image Exists
```bash
docker images
```
You should see something like:

```bash
REPOSITORY                      TAG     IMAGE ID       CREATED         SIZE
blueberrybeach/neuronet-precompile2   v1      abcdef123456   2 minutes ago   1.4GB
```

### 🚀 Optional: Push the Image to Docker Hub
If you're logged in to Docker Hub and want to back it up or share it:

```bash
docker login
```
```bash
docker push blueberrybeach/neuronet-precompile2:v1
```

### ⚠️ Reminder
Committing containers is useful for:
- Preserving edits before rebuilds
- Creating reproducible snapshots of the container state
- Backing up runtime-generated files/config
- But for regular development, it’s better to mount volumes and rebuild from a Dockerfile for a clean, version-controlled workflow.


