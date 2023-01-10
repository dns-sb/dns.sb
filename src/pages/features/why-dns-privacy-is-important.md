---
title: "Why DNS Privacy is Especially Important"
description: "An introduction to the positive and negative side of Privacy in DNS today."
---

# Why DNS Privacy is Especially Important

> Despite the privacy and security enhancements offered by encrypted transport protocols, the DNS resolver's privacy policy is important because the service still has the ability to see, store, or use the DNS query history associated with individual IP addresses, or in some cases, individual devices.
> By Stan Adams in [DNS: Strengthening the Weakest Link in Internet Privacy](https://cdt.org/insights/dns-strengthening-the-weakest-link-in-internet-privacy/)

All of ISP operators can easily get your DNS Query logs. If you don't trust your ISP, **DO NOT** use.

![Example DNS Query Log](https://s3.image.hosting/2021/07/02/5GgP.png "Example DNS Query Log")

---

## Introduction to DNS Privacy

Almost every time we use an Internet application, it starts with a DNS (Domain Name System) transaction to map a human-friendly domain name to a set of IP addresses that can be used to deliver packets over the Internet. DNS transactions can therefore be correlated to the applications we use, the websites we visit, and sometimes even the people we communicate with.

While the domain name information itself is public, the transactions performed by the hosts are not. Unfortunately, the DNS does not inherently employ any mechanisms to provide confidentiality for these transactions, and the corresponding information can therefore easily be logged by the operators of DNS resolvers and name servers, as well as be eavesdropped by others.

## DNS over TLS (DoT)

[RFC7858](https://datatracker.ietf.org/doc/html/rfc7858) specifies how to communicate with a recursive resolver over a TLS-secured connection. However, it also has the potential for improving the privacy properties of transactions between recursive resolvers and authoritative nameservers (see e.g. [DNS over TLS: Encrypting DNS end-to-end](https://engineering.fb.com/2018/12/21/security/dns-over-tls/)).

The service employs a separate port number, TCP port 853, rather than the existing DNS service port (53). The recursive resolvers may be authenticated by means of a Subject Public Key Info (SPKI) Fingerprint (please see Section 3.2 and Section 4 of [RFC7858](https://datatracker.ietf.org/doc/html/rfc7858) for details).

## DNS over HTTPS (DoH)

[RFC8484](https://datatracker.ietf.org/doc/html/rfc8484) specifies how to send and receive DNS queries over HTTPS. Server configuration is performed out of band, and the connection with the resolver is secured as any other HTTPS traffic. DoH is mostly targeted at web browsers and does **not** have the potential for improving the privacy properties of transactions between recursive resolvers and authoritative nameservers.

One possible benefit from a user standpoint is that since DNS queries can be intermingled with normal web traffic, DoH might prove more difficult to block than DoD and DoT – or at the very least would require blocking the IP addresses of well-known DoH servers, rather than simply the corresponding DoH service port.

## References

[Internet Society](https://www.internetsociety.org/resources/deploy360/dns-privacy/intro/)
