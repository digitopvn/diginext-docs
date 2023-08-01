---
sidebar_position: 5
---

# Extra Configuration

### System packages

If you’re on Linux OS and want the build server to start up every reboot, you might want to enable Diginext server as a system service (with `systemctl` for example).

### **TLS & Reverse Proxy**

The Coder server can directly use TLS certificates with **`CODER_TLS_ENABLE`** and accompanying configuration flags. However, Coder can also run behind a reverse-proxy to terminate TLS certificates from LetsEncrypt, for example.

- **[Apache](https://github.com/coder/coder/tree/main/examples/web-server/apache)**
- **[Caddy](https://github.com/coder/coder/tree/main/examples/web-server/caddy)**
- **[NGINX](https://github.com/coder/coder/tree/main/examples/web-server/nginx)**