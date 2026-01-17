---
title: "Why DNS Privacy is Especially Important"
description: "Understanding the importance of DNS privacy and how encrypted DNS protocols protect your online activity."
---

# Why DNS Privacy is Especially Important

> Despite the privacy and security enhancements offered by encrypted transport protocols, the DNS resolver's privacy policy is important because the service still has the ability to see, store, or use the DNS query history associated with individual IP addresses, or in some cases, individual devices.
>
> — Stan Adams, [DNS: Strengthening the Weakest Link in Internet Privacy](https://cdt.org/insights/dns-strengthening-the-weakest-link-in-internet-privacy/)

All ISP operators can easily access your DNS query logs. If you don't trust your ISP, do not use their DNS servers.

[![Example DNS Query Log](/images/features/dns-query-log-example.webp)](/images/features/dns-query-log-example.webp)

---

## Introduction to DNS Privacy

Almost every time we use an Internet application, it starts with a DNS (Domain Name System) transaction to map a human-friendly domain name to a set of IP addresses. DNS transactions can therefore be correlated to the applications we use, the websites we visit, and sometimes even the people we communicate with.

While domain name information itself is public, the transactions performed by individual hosts are not. Unfortunately, DNS does not inherently employ any mechanisms to provide confidentiality for these transactions. The corresponding information can therefore easily be logged by operators of DNS resolvers and name servers, as well as be eavesdropped by others on the network.

## DNS over TLS (DoT)

[RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858) specifies how to communicate with a recursive resolver over a TLS-secured connection. It also has the potential for improving the privacy properties of transactions between recursive resolvers and authoritative nameservers (see [DNS over TLS: Encrypting DNS end-to-end](https://engineering.fb.com/2018/12/21/security/dns-over-tls/)).

DoT uses a dedicated port (TCP 853), separate from the standard DNS port (53). Recursive resolvers may be authenticated using a Subject Public Key Info (SPKI) fingerprint (see Section 3.2 and Section 4 of [RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858) for details).

## DNS over HTTPS (DoH)

[RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) specifies how to send and receive DNS queries over HTTPS. The connection with the resolver is secured like any other HTTPS traffic. DoH is primarily targeted at web browsers and does not have the potential for improving privacy between recursive resolvers and authoritative nameservers.

One benefit from a user standpoint is that DNS queries can be intermingled with normal web traffic. This makes DoH more difficult to block than DoT — blocking would require filtering the IP addresses of well-known DoH servers, rather than simply blocking the DoT service port.

## References

- [DNS Privacy - Introduction (Internet Society)](https://www.internetsociety.org/resources/deploy360/dns-privacy/intro/)
