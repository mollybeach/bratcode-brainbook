# 🐳 Docker Workflow for Syncing and Replacing Code Inside a Container

This guide explains how to:

* Copy your local `blockchain` directory to a running Docker container on a remote server
* Overwrite the container’s internal code under `/app/src/blockchain`
* Restart the container to reflect changes
* Understand where changes live and what happens when you commit them

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

## 🧩️ How Docker Commit Works

When you modify files inside a Docker container, the changes exist **only in the container's writable layer**. If you want to persist those changes into a new Docker image, you need to run:

```bash
sudo docker commit 77061197fe23 molly/blockchain-updated
```

This creates a new image with your current container state. You can later run it with:

```bash
sudo docker run -it molly/blockchain-updated
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

## 🔀 Option 2 – Full Remote Flow with `scp` and `docker cp`

Use this if you're syncing files from your **Mac → Remote Server → Docker Container**.

### 📅 Step 1: Copy to Remote Host

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

### 💾 Step 2: SSH into the Remote Host

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

## 🧐 Notes on Editing Remote Files

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

## 🔪 Verify Changes

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
