---
{
  "title": "How to set DNS over TLS on Linux",
  "description": "How to set DoT on Linux"
}
---

## Debian and most popular Linux distributions

For modern Linux distributions, we recommend using `systemd-resolved`

### 1. Enable systemd-resolved

`systemctl start systemd-resolved`

### 2. Open /etc/systemd/resolved.conf

`vim /etc/systemd/resolved.conf`

Here's an example config

```
[Resolve]
DNS=185.222.222.222 45.11.45.11 2a09::#dot.sb 2a11::#dot.sb
DNSOverTLS=yes
DNSSEC=yes
```

or

```
[Resolve]
DNS=185.222.222.222#dot.sb 45.11.45.11#dot.sb 2a09::#dot.sb 2a11::#dot.sb
DNSOverTLS=yes
DNSSEC=yes
```

### 3. Restart systemd-resolved

`systemctl restart systemd-resolved`

### 4. Change /etc/resolv.conf

`vim /etc/resolv.conf`

### 5. Set nameserver to 127.0.0.53

`nameserver 127.0.0.53`

### 6. Test if DNS is working

```
root@server ~ # dig example.com

; <<>> DiG 9.11.5-P4-5.1+deb10u5-Debian <<>> example.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 63006
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;example.com.			IN	A

;; ANSWER SECTION:
example.com.		3309	IN	A	93.184.216.34

;; Query time: 0 msec
;; SERVER: 127.0.0.53#53(127.0.0.53)
;; WHEN: Fri Jul 02 10:29:59 UTC 2021
;; MSG SIZE  rcvd: 56
```

We can see the resonse DNS server is `127.0.0.53#53(127.0.0.53)`, which is working fine.