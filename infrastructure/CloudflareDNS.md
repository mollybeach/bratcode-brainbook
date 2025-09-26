# 🌐 Cloudflare DNS Setup for Vercel Staging

This guide explains how to configure **staging.chat.mywebsite.com** on Cloudflare to point to Vercel.  
It also explains DNS concepts like **TTL** and **CNAME** for clarity.

---

## 🔹 Step 1: Gather the Vercel DNS Records

From Vercel, you’ll need to add:

**CNAME Record**
- Name: `staging.chat`
- Value: `abcd1234efgh5678.vercel-dns-999.com`

**TXT Record**
- Name: `_vercel`
- Value: `vc-domain-verify=staging.chat.mywebsite.com,xyz987654321abcd`

---

## 🔹 Step 2: Log in to Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Select the domain **`mywebsite.com`**.

---

## 🔹 Step 3: Navigate to DNS Records

- In the sidebar, click **DNS → Records**.  
- This is where you’ll add the new **CNAME** and **TXT** records.

---

## 🔹 Step 4: Add the CNAME Record

1. Click **Add record**.  
2. Type → **CNAME**  
3. Name: `staging.chat`  
4. Target: `abcd1234efgh5678.vercel-dns-999.com`  
5. Proxy status: **DNS only** (gray cloud, not orange).  
6. Save.

---

## 🔹 Step 5: Add the TXT Record

1. Click **Add record**.  
2. Type → **TXT**  
3. Name: `_vercel`  
4. Content: `vc-domain-verify=staging.chat.mywebsite.com,xyz987654321abcd`  
5. Save.

---

## 🔹 Step 6: Verify in Vercel

1. Go to your Vercel project dashboard.  
2. Navigate to **Settings → Domains**.  
3. Add `staging.chat.mywebsite.com` if not already added.  
4. Click **Verify** → Vercel will check the TXT record.

---

## 🔹 Step 7: Test the Subdomain

1. Wait a few minutes for DNS propagation.  
2. Visit: [https://staging.chat.mywebsite.com](https://staging.chat.mywebsite.com).  
3. It should now load your staging deployment from Vercel.

---

## 🧾 Notes

- **TTL (Time To Live):**
  - `300` (5 minutes) → good for staging/testing.  
  - `3600` (1 hour) → good for production once stable.  

- **CNAME Records:**  
  A CNAME is an *alias* that points one domain (e.g., `staging.chat.mywebsite.com`) to another domain managed by Vercel.  
  This lets Vercel update IPs under the hood without you changing Cloudflare records.

✅ That completes the setup.
