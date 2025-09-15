# A100 Nginx Setup Guide for chat.molly.ai

This comprehensive guide walks you through setting up nginx on an A100 GPU server to serve your FastAPI application with SSL certificates and proper DNS configuration.

## 🎯 Overview

This setup creates a complete production-ready deployment:
- **Domain**: `chat.molly.ai`
- **Server**: A100 GPU server (`150.136.41.118`)
- **API**: FastAPI running on port 8000
- **SSL**: Let's Encrypt certificate with auto-renewal
- **DNS**: Cloudflare DNS management

## 📋 Prerequisites

### Required Access
- SSH access to A100 server (`150.136.41.118`)
- Cloudflare DNS management access
- Domain ownership of `molly.ai`

### Required Tools
- SSH key configured for A100 server
- `make` command available locally
- `curl` for testing

### Server Requirements
- Ubuntu 22.04 (or compatible)
- Port 80 and 443 open for HTTP/HTTPS
- Sudo access on the server

## 🚀 Step-by-Step Setup

### Step 1: Configure SSH Access

First, ensure you have SSH access to the A100 server.

#### 1.1 Add SSH Key
Create or update your SSH key file:
```bash
# Create the key file (replace with actual private key)
nano ~/.ssh/a100_key

# Set correct permissions
chmod 600 ~/.ssh/a100_key
```

#### 1.2 Update SSH Config
Add to `~/.ssh/config`:
```bash
Host a100
  HostName 150.136.41.118
  User ubuntu
  IdentityFile ~/.ssh/a100_key
```

#### 1.3 Test SSH Connection
```bash
ssh a100
```

### Step 2: Update DNS Configuration

#### 2.1 Access Cloudflare Dashboard
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your `molly.ai` domain
3. Go to **DNS > Records**

#### 2.2 Update A Record
Create or update the DNS record:
```
Type: A
Name: chat2
IPv4 address: 150.136.41.118
Proxy status: DNS only (grey cloud)
TTL: Auto
```

#### 2.3 Save Changes
Click **Save** and wait for DNS propagation (5-10 minutes).

### Step 3: Deploy to A100 Server

#### 3.1 Copy Setup Script
```bash
# Copy the nginx setup script we created
scp setup-a100-nginx-fixed.sh a100:~/

# Make executable on server
ssh a100 "chmod +x setup-a100-nginx-fixed.sh"
```

#### 3.2 Run Nginx Setup
```bash
# Execute the setup script
ssh a100 "sudo ./setup-a100-nginx-fixed.sh"
```

Expected output:
```
🚀 Setting up nginx for chat.molly.ai on A100...
📦 Installing nginx...
🔒 Installing certbot for SSL certificates...
📝 Creating nginx configuration...
🔗 Enabling nginx site...
🧪 Testing nginx configuration...
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
🔄 Restarting nginx...
✅ Nginx configured successfully!
```

### Step 4: Start Your API Server

#### 4.1 Using Makefile (Recommended)
```bash
# Start the complete A100 pipeline
make a100-start-api
```

#### 4.2 Manual Start (Alternative)
```bash
ssh a100
tmux new -As neuronet
cd ~/neuronet-consensus
. .venv/bin/activate
PYTHONPATH=$(pwd) python3 -m src.api.server
```

### Step 5: Test HTTP Connection

#### 5.1 Wait for DNS Propagation
Wait 5-10 minutes after DNS changes, then test:

```bash
# Test domain resolution
nslookup chat.molly.ai

# Test HTTP connection
curl -I http://chat.molly.ai
```

#### 5.2 Test API Endpoint
```bash
# Test chat endpoint
curl -X POST -H "Content-Type: application/json" \
  -d '{"message": "Hello A100!", "user_address": "0x123"}' \
  http://chat.molly.ai/api/chat/send
```

Expected response:
```json
{
  "success": true,
  "response": "Hello! How can I help you today?",
  "error": null,
  "cost_info": null,
  "user_balance": null,
  "model_tier": "tier_3",
  "msg_id": "temp_1234567890",
  "session_id": null
}
```

### Step 6: Install SSL Certificate

#### 6.1 Get Let's Encrypt Certificate
```bash
ssh a100
sudo certbot --nginx -d chat.molly.ai --non-interactive --agree-tos --email blueberry@molly.ai
```

Expected output:
```
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/chat.molly.ai/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/chat.molly.ai/privkey.pem
This certificate expires on 2025-12-14.
Successfully deployed certificate for chat.molly.ai
Congratulations! You have successfully enabled HTTPS on https://chat.molly.ai
```

#### 6.2 Test HTTPS Connection
```bash
# Test HTTPS endpoint
curl -X POST -H "Content-Type: application/json" \
  -d '{"message": "Hello HTTPS A100!", "user_address": "0x123"}' \
  https://chat.molly.ai/api/chat/send
```

## 🔧 Management Commands

### A100 Server Management
```bash
# Check system status
make a100-status

# View API logs
make a100-attach

# Monitor GPU and system
make a100-monitor

# Restart services
make a100-restart

# Stop services
make a100-stop
```

### Nginx Management
```bash
# Check nginx status
ssh a100 "sudo systemctl status nginx"

# Test configuration
ssh a100 "sudo nginx -t"

# Reload configuration
ssh a100 "sudo systemctl reload nginx"

# View logs
ssh a100 "sudo tail -f /var/log/nginx/chat.molly.ai.access.log"
ssh a100 "sudo tail -f /var/log/nginx/chat.molly.ai.error.log"
```

### SSL Certificate Management
```bash
# Check certificate status
ssh a100 "sudo certbot certificates"

# Renew certificates (manual)
ssh a100 "sudo certbot renew"

# Test renewal
ssh a100 "sudo certbot renew --dry-run"
```

## 🔍 Troubleshooting

### Common Issues and Solutions

#### 1. DNS Not Propagating
**Problem**: Domain still points to old server
**Solution**: 
```bash
# Check DNS propagation
dig chat.molly.ai
nslookup chat.molly.ai

# Clear local DNS cache (macOS)
sudo dscacheutil -flushcache
```

#### 2. Nginx Configuration Errors
**Problem**: `nginx -t` fails
**Solution**:
```bash
# Check syntax
ssh a100 "sudo nginx -t"

# View detailed error
ssh a100 "sudo nginx -T"

# Check logs
ssh a100 "sudo tail -f /var/log/nginx/error.log"
```

#### 3. API Not Responding
**Problem**: 502 Bad Gateway
**Solution**:
```bash
# Check if API is running
ssh a100 "curl -I http://localhost:8000/api/chat/send"

# Check tmux session
ssh a100 "tmux list-sessions"

# Restart API
make a100-restart
```

## ✅ Final Verification

After completing all steps, verify your setup:

### 1. DNS Resolution
```bash
nslookup chat.molly.ai
# Should return: 150.136.41.118
```

### 2. HTTP/HTTPS Access
```bash
# HTTP (should redirect to HTTPS)
curl -I http://chat.molly.ai

# HTTPS
curl -I https://chat.molly.ai
```

### 3. API Functionality
```bash
# Test chat endpoint
curl -X POST -H "Content-Type: application/json" \
  -d '{"message": "Final test!", "user_address": "0x123"}' \
  https://chat.molly.ai/api/chat/send
```

## ✅ Success Criteria

Your setup is successful when:

- ✅ `chat.molly.ai` resolves to `150.136.41.118`
- ✅ HTTPS certificate is valid and trusted
- ✅ API endpoints respond correctly
- ✅ CORS headers are present
- ✅ Nginx is running and configured
- ✅ Auto-renewal is configured

---

**Created**: September 15, 2025  
**Server**: A100 GPU (150.136.41.118)  
**Domain**: chat.molly.ai  
**SSL**: Let's Encrypt (blueberry@molly.ai)  
**Status**: ✅ Production Ready
