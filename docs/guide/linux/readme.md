---
{
  "title": "How to change DNS settings on Linux",
  "description": "How to set DNS servers on Linux"
}
---

# How to change DNS settings on Linux

Follow this quick guide to start using DNS.SB on your Linux device.

## Debian

>> The guide for Debian also works with most common Linux distributions

1. Open `/etc/resolv.conf`

```bash
$sudo vim /etc/resolv.conf
```

2. Replace the `nameserver` lines with

- For IPv4

```
nameserver 185.222.222.222
nameserver 45.11.45.11
```

- For IPv6

```
nameserver 2a09::
nameserver 2a11::
```

You can also lock this file for security purpose

```bash
sudo apt install e2fsprogs -y
sudo chattr +i /etc/resolv.conf
```

Or unlock it with `sudo chattr -i /etc/resolv.conf`

## Ubuntu 18.04 and later

Since Ubuntu 18.04, you shoud make the change in netplan configs at `/etc/netplan/*.yaml`, this file could be `50-cloud-init.yaml` or something like `01-netcfg.yaml`

Open this file and it looks like

```yaml
network:
    version: 2
    ethernets:
        eth0:
            addresses:
            - 192.0.2.2/24
            gateway4: 192.0.2.1/24
            match:
                macaddress: 01:23:45:67:89:AB
            nameservers:
                addresses:
                - 198.51.100.1
                - 203.0.113.1
                search: []
            set-name: eth0
```

Replace the `nameservers` section with

```yaml
nameservers:
  addresses:
  - 185.222.222.222
  - 45.11.45.11
```

Then run the following command

```bash
sudo netplan apply
```

You can check your current DNS assignment by running the `systemd-resolve` command

```bash
systemd-resolve --status
```