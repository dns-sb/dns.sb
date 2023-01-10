---
title: "How to set DNS over HTTPS on Linux"
description: "How to set DNS.SB's DoH (DNS over HTTPS) on Linux"
---

# How to install DoH client on Linux

We use [dnsproxy](https://github.com/AdguardTeam/dnsproxy) from AdguardTeam as DoH Client on Linux system.

DNS Proxy is a simple DNS proxy server that supports all existing DNS protocols including DNS-over-TLS, DNS-over-HTTPS, DNSCrypt, and DNS-over-QUIC. Moreover, it can work as a DNS-over-HTTPS, DNS-over-TLS or DNS-over-QUIC server.

## 1. Install DNS Proxy

```bash
VERSION=$(curl -s https://api.github.com/repos/AdguardTeam/dnsproxy/releases/latest | grep tag_name | cut -d '"' -f 4) && echo "Latest AdguardTeam dnsproxy version is $VERSION"
wget -O dnsproxy.tar.gz "https://github.com/AdguardTeam/dnsproxy/releases/download/${VERSION}/dnsproxy-linux-amd64-${VERSION}.tar.gz"
tar -xzvf dnsproxy.tar.gz
cd linux-amd64
mv dnsproxy /usr/bin/dnsproxy
```

## 2. Connect DNS.SB DoH Server

```bash
dnsproxy -l 127.0.0.1 -p 53 -u https://doh.dns.sb/dns-query -b 185.222.222.222:53
```

Now we can open another terminal to test DNS

```bash
root@dns ~ # dig example.com @127.0.0.1
; <<>> DiG 9.16.15-Debian <<>> example.com @127.0.0.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 22295
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;example.com.			IN	A
;; ANSWER SECTION:
example.com.		1094	IN	A	93.184.216.34
;; Query time: 3 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Fri Jul 02 13:07:43 UTC 2021
;; MSG SIZE  rcvd: 56
```

We can see the response server  `SERVER: 127.0.0.1#53(127.0.0.1)` is working fine.

## 3. Keep DNS Proxy running in background

We use [Supervisor](https://github.com/Supervisor/supervisor):

```bash
apt install supervisor -y
```
Then create a config file

```bash
cat > /etc/supervisor/conf.d/dnsproxy.conf <<EOF
[program:dnsproxy]
command = dnsproxy -l 127.0.0.1 -p 53 -u https://doh.dns.sb/dns-query -b 185.222.222.222:53
user = root
autostart = true
autorestart = true
stdout_logfile = /var/log/supervisor/dnsproxy.log
stderr_logfile = /var/log/supervisor/dnsproxy.error.log
environment = LANG="en_US.UTF-8"
EOF
```
Now let's restart Supervisor

```bash
systemctl restart supervisor
```
## 4. Change /etc/resolv.conf

We can use the same method like [How to change DNS settings on Linux](/guide/linux/), open `/etc/resolv.conf`

```bash
vim /etc/resolv.conf
```

Replace the `nameserver` lines with

```conf
nameserver 127.0.0.1
```
Save the file and it's working now.
