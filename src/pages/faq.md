---
title: "Frequently Asked Questions"
description: "Frequently asked questions about DNS.SB."
---

# Frequently Asked Questions

## What is DNS?

DNS stands for Domain Name System. It is a system that translates human-friendly domain names, such as `example.com`, into machine-friendly IP addresses, such as `192.0.2.1`. This allows users to access websites and other Internet services using easy-to-remember names, rather than having to remember and type in the underlying IP addresses.

DNS is based on a distributed database system, consisting of many DNS servers that work together to resolve domain names to IP addresses. When a user types a domain name into a web browser or clicks on a link, the browser sends a DNS query to a DNS server to resolve the domain name to an IP address.

The DNS server looks up the IP address associated with the domain name in its local database or cache, and if it can't find it, it sends the query to other DNS servers that are authoritative for that domain or to the root DNS servers.

Once it gets the IP address for the domain, DNS server responds with that IP address to the client, which then uses it to connect to the appropriate web server.

DNS is a fundamental component of the Internet's infrastructure and is used every time you visit a website, send an email, or connect to any other service on the Internet.

## Does DNS.SB have IPv6 support?

Yes, DNS.SB has full IPv6 support.

## Does DNS.SB have DNSSEC?

Yes, DNS.SB is a DNSSEC validating resolver.

## Does DNS.SB have logs?

No, we do not store any type of logs for DNS queries.

## Does DNS.SB have EDNS Client Subnet?

No, DNS.SB is a privacy centric resolver so it does not send any client IP information and does not send the EDNS Client Subnet Header to authoritative servers.
