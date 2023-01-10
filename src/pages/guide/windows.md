---
title: "How to change DNS settings on Windows"
description: "How to set DNS.SB's regular DNS on on Windows"
---

# How to change DNS settings on Windows 10 / Windows Server 2019

If you want to change your DNS settings on Windows system, it's easy with few clicks.

## Step 1 - Open Network Connections

Find the computer icon on taskbar

![5P3j.png](https://s3.image.hosting/2021/07/02/5P3j.png)

Right-click on the icon and then select `Open Network & Internet settings`

![5xrp.png](https://s3.image.hosting/2021/07/02/5xrp.png)

Select `Change adapter options`

![5NfR.png](https://s3.image.hosting/2021/07/02/5NfR.png)

Find your current adapter with Internet access and right-click the icon, then select `Properties`

![5S5D.png](https://s3.image.hosting/2021/07/02/5S5D.png)

## Step 2 - Change DNS resolvers to DNS.SB for IPv4

In the Ethernet Properties windows, select `Internet Protocol Version 4 (TCP/IPv4)`, then click `Properties`

![5b4B.png](https://s3.image.hosting/2021/07/02/5b4B.png)

In `Internet Protocol Version 4 (TCP/IPv4) Properties`, select `Use the following DNS server addresses`, and add our DNS servers

- **Preffered DNS server**: `185.222.222.222`
- **Alternate DNS server**: `45.11.45.11`

![5rTg.png](https://s3.image.hosting/2021/07/02/5rTg.png)

Click `OK` button to confirm.

## Step 3 - Change DNS resolvers to DNS.SB for IPv6

Select `Internet Protocol Version 6 (TCP/IPv6)`, then click `Properties`

![5yAz.png](https://s3.image.hosting/2021/07/02/5yAz.png)

Click `Use The Following DNS Server Addresses` and add our DNS servers

- **Preffered DNS server**: `2a09::`
- **Alternate DNS server**: `2a11::`

![5QBu.png](https://s3.image.hosting/2021/07/02/5QBu.png)

Click `OK` button to confirm.
