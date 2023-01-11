---
title: "How to change DNS settings on Windows"
description: "How to set DNS.SB's regular DNS on on Windows"
---

## How to change DNS settings on Windows 11 / Windows Server 2022

If you want to change your DNS settings on Windows system, it's easy with few clicks.

### Step 1 - Open Network Connections

Find the computer icon on taskbar

[![WjqD7.png](https://s3.image.hosting/2023/01/11/WjqD7.png)](https://image.hosting/image/WjqD7)

Right-click on the icon and then select `Network and Internet settings`

![WjUQH.png](https://s3.image.hosting/2023/01/11/WjUQH.png)

Select `Ethernet` or `Wi-Fi` depending on your connection type:

![WjfVV.png](https://s3.image.hosting/2023/01/11/WjfVV.png)

### Step 2 - Change DNS resolvers to DNS.SB

Find the `DNS` settings on `Ethernet` or `Wi-Fi` and click on `Edit`:

![Wjhsr.png](https://s3.image.hosting/2023/01/11/Wjhsr.png)

Change from `Automatic (DHCP)` to `Manual` and then add DNS.SB's servers:

![Wjibs.png](https://s3.image.hosting/2023/01/11/Wjibs.png)

For IPv4

**Preffered DNS**

```
185.222.222.222
```

**Alternate DNS**

```
45.11.45.11
```

![WjVUf.png](https://s3.image.hosting/2023/01/11/WjVUf.png)

For IPv6

**Preffered DNS**

```
2a09::
```

**Alternate DNS**

```
2a11::
```

![WjZ6S.png](https://s3.image.hosting/2023/01/11/WjZ6S.png)

Click `Save` button to confirm.

## How to change DNS settings on Windows 10 / Windows Server 2019

There are some small differences between Windows 10 and Windows 11, but the steps are almost the same.

### Step 1 - Open Network Connections

Find the computer icon on taskbar

![5P3j.png](https://s3.image.hosting/2021/07/02/5P3j.png)

Right-click on the icon and then select `Open Network & Internet settings`

![5xrp.png](https://s3.image.hosting/2021/07/02/5xrp.png)

Select `Change adapter options`

![5NfR.png](https://s3.image.hosting/2021/07/02/5NfR.png)

Find your current adapter with Internet access and right-click the icon, then select `Properties`

![5S5D.png](https://s3.image.hosting/2021/07/02/5S5D.png)

### Step 2 - Change DNS resolvers to DNS.SB for IPv4

In the Ethernet Properties windows, select `Internet Protocol Version 4 (TCP/IPv4)`, then click `Properties`

![5b4B.png](https://s3.image.hosting/2021/07/02/5b4B.png)

In `Internet Protocol Version 4 (TCP/IPv4) Properties`, select `Use the following DNS server addresses`, and add our DNS servers

**Preffered DNS server**

```
185.222.222.222
```

**Alternate DNS server**

```
45.11.45.11
```

![5rTg.png](https://s3.image.hosting/2021/07/02/5rTg.png)

Click `OK` button to confirm.

### Step 3 - Change DNS resolvers to DNS.SB for IPv6

Select `Internet Protocol Version 6 (TCP/IPv6)`, then click `Properties`

![5yAz.png](https://s3.image.hosting/2021/07/02/5yAz.png)

Click `Use The Following DNS Server Addresses` and add our DNS servers

**Preffered DNS server**

```
2a09::
```

**Alternate DNS server**

```
2a11::
```

![5QBu.png](https://s3.image.hosting/2021/07/02/5QBu.png)

Click `OK` button to confirm.
