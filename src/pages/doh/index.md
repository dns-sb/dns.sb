---
title: "DNS over HTTPS"
description: "DNS over HTTPS. DNS over HTTPS (DoH) is a protocol for performing remote Domain Name System (DNS) resolution via the HTTPS protocol."
---

# Using DNS over HTTPS at DNS.SB

## What is DoH (DNS over HTTPS)

DNS over HTTPS (DoH) is a protocol for encrypting and authenticating communications between DNS clients and servers using the HTTPS (HTTP over Transport Layer Security) protocol. The goal of DoH is to improve the privacy and security of DNS by encrypting the query and response payloads, and by providing authentication of the DNS server's identity. This allows DNS queries to be protected from eavesdropping and tampering, both on the network and on the client or server side.

With DoH, DNS queries are sent over an HTTPS connection, which means that they are encoded in the same format as web requests and are subject to the same encryption and authentication features as web traffic. This can make it more difficult for an attacker to intercept or tamper with DNS queries, or to correlate the queries with the user's browsing activities.

## Our DoH Servers

*No Logging, DNSSEC enabled*

### Global CDN

```
https://doh.dns.sb/dns-query
```

or

```
https://doh.sb/dns-query
```

DNS.SB also supports pure IP DNS over HTTPS:

```
https://45.11.45.11/dns-query
```

```
https://185.222.222.222/dns-query
```

### Unicast PoPs

| Location                   | DoH URL                            | Hosting Provider                           |
| -------------------------- | ---------------------------------- | ------------------------------------------ |
| Düsseldorf, Germany        | `https://de-dus.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Frankfurt, Germany         | `https://de-fra.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Amsterdam, Netherlands     | `https://nl-ams.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Amsterdam, Netherlands     | `https://nl-ams2.doh.sb/dns-query` | [xTom](https://xtom.com/)                  |
| London, United Kingdom     | `https://uk-lon.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Tallinn, Estonia           | `https://ee-tll.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Osaka, Japan               | `https://jp-kix.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Tokyo, Japan               | `https://jp-nrt.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Hong Kong, China           | `https://hk-hkg.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Sydney, Australia          | `https://au-syd.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Chicago, United States     | `https://us-chi.doh.sb/dns-query`  | [HostVenom](https://xt.om/hostvenom)       |
| New York, United States    | `https://us-nyc.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| San Jose, United States    | `https://us-sjc.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Los Angeles, United States | `https://us-lax.doh.sb/dns-query`  | [xTom](https://xtom.com/)                  |
| Bengaluru, India           | `https://in-blr.doh.sb/dns-query`  | [DigitalOcean](https://xt.om/digitalocean) |
| Singapore                  | `https://sg-sin.doh.sb/dns-query`  | [DigitalOcean](https://xt.om/digitalocean) |
| Singapore                  | `https://sg-sin2.doh.sb/dns-query` | [xTom](https://xtom.com/)                  |
| Seoul, South Korea         | `https://kr-sel.doh.sb/dns-query`  | [Amazon AWS](https://aws.amazon.com/)      |
| Moscow, Russia             | `https://ru-mow.doh.sb/dns-query`  | [Servers.com](https://xt.om/serverscom)    |
| Toronto, Canada            | `https://ca-yyz.doh.sb/dns-query`  | [Vultr](https://xt.om/vultr)               |
| Berlin, Germany            | `https://de-ber.doh.sb/dns-query`  | [Misaka](https://misaka.io/)               |

## How to set DNS.SB DoH Server

- [Mozilla Firefox](/doh/firefox/)
- [Google Chrome](/doh/chrome/)
- [Microsoft Edge](/doh/edge/)
- [Vivaldi Browser](/doh/vivaldi/)
- [Windows](/doh/windows/)
- [Linux](/doh/linux/)
- [Android](/doh/android/)
- [iOS & macOS](/doh/apple/)
