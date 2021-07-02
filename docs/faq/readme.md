---
{
  "title": "Frequently Asked Questions",
  "description": "Frequently asked questions about DNS.SB."
}
---

## What is DNS?

The Domain Name System (DNS) is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. Most prominently, it translates more readily memorized domain names to the numerical IP addresses needed for locating and identifying computer services and devices with the underlying network protocols. By providing a worldwide, distributed directory service, the Domain Name System has been an essential component of the functionality of the Internet since 1985. ([Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System))

## Does DNS.SB have IPv6 support?

Yes, DNS.SB has full IPv6 support.

## Does DNS.SB have DNSSEC?

Yes, DNS.SB is a DNSSEC validating resolver.

## Does DNS.SB have logs?

No, we do not store any type of logs for DNS queries.

## Does DNS.SB have EDNS Client Subnet?

No, DNS.SB is a privacy centric resolver so it does not send any client IP information and does not send the EDNS Client Subnet Header to authoritative servers.