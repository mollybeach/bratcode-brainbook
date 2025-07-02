# Deploy & Reload **Neuronet Consensus** on the H200 GPU Server

This guide walks you through syncing code, SSH‑ing in, and keeping the API running in a persistent **tmux** session.

---

## 1. Prerequisites

| Requirement | Notes                                                |
| ----------- | ---------------------------------------------------- |
| **SSH key** | Add `~/.ssh/h200_key` to your `~/.ssh/config`:<br /> |

````
Host h200
    HostName 192.222.58.49
    User ubuntu
    IdentityFile ~/.ssh/h200_key
``` |
| **Python venv** | Ensure `~/neuronet-consensus/.venv` exists on the server |
| **Makefile** | Must include `h200-step1` and `h200-step2` targets (see §5) |
| **tmux** | Install on the server <br />`sudo apt-get install tmux` |

---

## 2. Sync local changes

Run **from your laptop**:

```bash
make h200-step1
````

What this does:

1. Uses **rsync** to push only changed files (ignoring `.git`, `__pycache__`, `*.pyc`).
2. Prints a ready‑to‑run one‑liner to start the API.
3. Opens an SSH shell (`ssh -v h200`) so you can paste that one‑liner.

---

## 3. Start or reload the API inside tmux

On the **H200** prompt:

```bash
# Create—or attach to—session "neuronet"
tmux new -As neuronet

# Inside tmux:
cd ~/neuronet-consensus
. .venv/bin/activate
PYTHONPATH=$(pwd) python3 -m src.api.server
```

### tmux shortcuts

| Action       | Keys / Command                  |
| ------------ | ------------------------------- |
| Detach       | `Ctrl-b d`                      |
| Re‑attach    | `tmux attach -t neuronet`       |
| Kill session | `tmux kill-session -t neuronet` |

After killing the session, repeat the commands above to launch a fresh server with the latest code.

---

## 4. Handy one‑liner (after each sync)

```bash
cd ~/neuronet-consensus && . .venv/bin/activate && \
TMUX_SESSION="neuronet" && \
tmux new -As "$TMUX_SESSION" "PYTHONPATH=$(pwd) python3 -m src.api.server"
```

Copy‑paste this in any SSH session to instantly restart the server in tmux.

---

## 5. Makefile targets (reference)

```makefile
h200-step1:
	@echo "Syncing changed files in neuronet-consensus to the H200..."
	rsync -avz -e "ssh -i ~/.ssh/h200_key" \
		--exclude '.git' --exclude '__pycache__' --exclude '*.pyc' --checksum \
		./ ubuntu@192.222.58.49:~/neuronet-consensus/
	@echo "Files synced successfully"
	@echo "Running h200-step2..."
	make h200-step2

h200-step2:
	@echo "Connecting to H200. Copy the command below and run it there:"
	@echo "--------------------------------"
	@echo "cd neuronet-consensus && . .venv/bin/activate && PYTHONPATH=$$(pwd) python3 -m src.api.server"
	@echo "--------------------------------"
	ssh -v h200
```

> **Tip:** Remove `-v` from `ssh -v h200` for quieter output, and adjust `echo` colors or emojis to suit your terminal preferences.
 **Neuronet Consensus** on the H200 GPU Server

This guide walks you through syncing code, SSH‑ing in, and keeping the API running in a persistent **tmux** session.

---

## 1. Prerequisites

| Requirement | Notes                                                |
| ----------- | ---------------------------------------------------- |
| **SSH key** | Add `~/.ssh/h200_key` to your `~/.ssh/config`:<br /> |

````
Host h200
    HostName 192.222.58.49
    User ubuntu
    IdentityFile ~/.ssh/h200_key
``` |
| **Python venv** | Ensure `~/neuronet-consensus/.venv` exists on the server |
| **Makefile** | Must include `h200-step1` and `h200-step2` targets (see §5) |
| **tmux** | Install on the server <br />`sudo apt-get install tmux` |

---

## 2. Sync local changes

Run **from your laptop**:

```bash
make h200-step1
````

What this does:

1. Uses **rsync** to push only changed files (ignoring `.git`, `__pycache__`, `*.pyc`).
2. Prints a ready‑to‑run one‑liner to start the API.
3. Opens an SSH shell (`ssh -v h200`) so you can paste that one‑liner.

---

## 3. Start or reload the API inside tmux

On the **H200** prompt:

```bash
# Create—or attach to—session "neuronet"
tmux new -As neuronet

# Inside tmux:
cd ~/neuronet-consensus
. .venv/bin/activate
PYTHONPATH=$(pwd) python3 -m src.api.server
```

### tmux shortcuts

| Action       | Keys / Command                  |
| ------------ | ------------------------------- |
| Detach       | `Ctrl-b d`                      |
| Re‑attach    | `tmux attach -t neuronet`       |
| Kill session | `tmux kill-session -t neuronet` |

After killing the session, repeat the commands above to launch a fresh server with the latest code.

---

## 4. Handy one‑liner (after each sync)

```bash
cd ~/neuronet-consensus && . .venv/bin/activate && \
TMUX_SESSION="neuronet" && \
tmux new -As "$TMUX_SESSION" "PYTHONPATH=$(pwd) python3 -m src.api.server"
```

Copy‑paste this in any SSH session to instantly restart the server in tmux.

---

## 5. Makefile targets (reference)

```makefile
h200-step1:
	@echo "Syncing changed files in neuronet-consensus to the H200..."
	rsync -avz -e "ssh -i ~/.ssh/h200_key" \
		--exclude '.git' --exclude '__pycache__' --exclude '*.pyc' --checksum \
		./ ubuntu@192.222.58.49:~/neuronet-consensus/
	@echo "Files synced successfully"
	@echo "Running h200-step2..."
	make h200-step2

h200-step2:
	@echo "Connecting to H200. Copy the command below and run it there:"
	@echo "--------------------------------"
	@echo "cd neuronet-consensus && . .venv/bin/activate && PYTHONPATH=$$(pwd) python3 -m src.api.server"
	@echo "--------------------------------"
	ssh -v h200
```

> **Tip:** Remove `-v` from `ssh -v h200` for quieter output, and adjust `echo` colors or emojis to suit your terminal preferences.
