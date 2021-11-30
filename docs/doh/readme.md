---
{
  "title": "DNS over HTTPS",
  "description": "DNS over HTTPS. DNS over HTTPS (DoH) is a protocol for performing remote Domain Name System (DNS) resolution via the HTTPS protocol."
}
---

# What is DoH

DNS over HTTPS (DoH) is a protocol for performing remote Domain Name System (DNS) resolution via the HTTPS protocol. A goal of the method is to increase user privacy and security by preventing eavesdropping and manipulation of DNS data by man-in-the-middle attacks. As of March 2018, Google and the Mozilla Foundation are testing versions of DNS over HTTPS. Cloudflare working with Mozilla claim to destroy all DNS data daily. ([Wikipedia](https://en.wikipedia.org/wiki/DNS_over_HTTPS))

## Our DoH Servers

### Global CDN

`https://doh.dns.sb/dns-query`

or

`https://doh.sb/dns-query`

or if you don't want domain name in URL

```
https://185.222.222.222/dns-query
https://45.11.45.11/dns-query
```

### Unicast PoPs

|   Location	            |   DoH URL                          	|   Hosting Provider	|
|-----------------------	|-----------------------------------	|-------------------	|
|   Düsseldorf, Germany     |   `https://de-dus.doh.sb/dns-query`  	|   [xTom](https://xtom.com/)    	        |
|   Frankfurt, Germany	    |   `https://de-fra.doh.sb/dns-query`	    |   [xTom](https://xtom.com/)     	        |
|   Amsterdam, Netherlands	|   `https://nl-ams.doh.sb/dns-query`	    |   [xTom](https://xtom.com/)    	        |
|   Amsterdam, Netherlands  |   `https://nl-ams2.doh.sb/dns-query`    |   [xTom](https://xtom.com/)    	        |
|   London, United Kingdom  |   `https://uk-lon.doh.sb/dns-query`     |   [xTom](https://xtom.com/)    	        |
|   Tallinn, Estonia        |   `https://ee-tll.doh.sb/dns-query`     |   [xTom](https://xtom.com/)    	        |
|   Osaka, Japan            |   `https://jp-kix.doh.sb/dns-query`     |   [xTom](https://xtom.com/)   	        |
|   Tokyo, Japan            |   `https://jp-nrt.doh.sb/dns-query`     |   [xTom](https://xtom.com/)   	        |
|   Hong Kong, China        |   `https://hk-hkg.doh.sb/dns-query`     |   [xTom](https://xtom.com/)    	        |
|   Sydney, Australia       |   `https://au-syd.doh.sb/dns-query`     |   [xTom](https://xtom.com/)    	        |
|   Chicago, United States  |   `https://us-chi.doh.sb/dns-query`     |   [HostVenom](https://xt.om/hostvenom)       	|
|   New York, United States  |   `https://us-nyc.doh.sb/dns-query`     |   [xTom](https://xtom.com/)       	|
|   San Jose, United States  |   `https://us-sjc.doh.sb/dns-query`     |   [xTom](https://xtom.com/)       	|
|   Bengaluru, India        |   `https://in-blr.doh.sb/dns-query`     |   [DigitalOcean](https://xt.om/digitalocean)       	|
|   Singapore               |   `https://sg-sin.doh.sb/dns-query`     |   [DigitalOcean](https://xt.om/digitalocean)    	        |
|   Seoul, South Korea      |   `https://kr-sel.doh.sb/dns-query`     |   [Amazon AWS](https://aws.amazon.com/)       	|
|   Moscow, Russia          |   `https://ru-mow.doh.sb/dns-query`     |   [Servers.com](https://xt.om/serverscom)       	|
|   Toronto, Canada         |   `https://ca-yyz.doh.sb/dns-query`     |   [Vultr](https://xt.om/vultr)       	|

*No Logging, DNSSEC enabled*

## How to set DNS.SB DoH Server

- [Mozilla Firefox](/guide/doh/firefox/)
- [Google Chrome](/guide/doh/chrome/)
- [Microsoft Edge](/guide/doh/edge/)
- [Windows](/guide/doh/windows/)
- [Linux](/guide/doh/linux/)
- [Android](/guide/doh/android/)
- [iOS & macOS](/guide/doh/apple/)