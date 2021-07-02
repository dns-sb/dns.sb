---
{
  "title": "DNS over TLS",
  "description": "DNS over TLS (DoT) is a security protocol for encrypting and wrapping Domain Name System (DNS) queries and answers via the Transport Layer Security (TLS) protocol."
}
---

# What is DoT

DNS over TLS (DoT) is a security protocol for encrypting and wrapping Domain Name System (DNS) queries and answers via the Transport Layer Security (TLS) protocol. The goal of the method is to increase user privacy and security by preventing eavesdropping and manipulation of DNS data via man-in-the-middle attacks. ([Wikipedia](https://en.wikipedia.org/wiki/DNS_over_TLS))

## Our DoT Servers

### Hostname for TLS Authentication

`dot.sb` or `dns.sb`

### TLS Port

- `853`

### IPv4

- `185.222.222.222`
- `45.11.45.11`

### IPv6

- `2a09::`
- `2a11::`


### IPv6 with Full Address

- `2a09:0000:0000:0000:0000:0000:0000:0000`
- `2a11:0000:0000:0000:0000:0000:0000:0000`

*No Logging, DNSSEC enabled*

## Example Configurations

### Unbound

[unbound.conf](https://github.com/dns-sb/DoT/blob/master/example/unbound.conf)