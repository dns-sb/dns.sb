(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{383:function(t,e,a){"use strict";a.r(e);var s=a(27),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"what-is-dot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-dot"}},[t._v("#")]),t._v(" What is DoT")]),t._v(" "),a("p",[t._v("DNS over TLS (DoT) is a security protocol for encrypting and wrapping Domain Name System (DNS) queries and answers via the Transport Layer Security (TLS) protocol. The goal of the method is to increase user privacy and security by preventing eavesdropping and manipulation of DNS data via man-in-the-middle attacks. ("),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/DNS_over_TLS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wikipedia"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("h2",{attrs:{id:"our-dot-servers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#our-dot-servers"}},[t._v("#")]),t._v(" Our DoT Servers")]),t._v(" "),a("h3",{attrs:{id:"hostname-for-tls-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostname-for-tls-authentication"}},[t._v("#")]),t._v(" Hostname for TLS Authentication")]),t._v(" "),a("p",[a("code",[t._v("dot.sb")])]),t._v(" "),a("p",[t._v("Note: The old hostname "),a("code",[t._v("dns.sb")]),t._v(" will be deprecated soon.")]),t._v(" "),a("h3",{attrs:{id:"tls-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls-port"}},[t._v("#")]),t._v(" TLS Port")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("853")])])]),t._v(" "),a("h3",{attrs:{id:"ipv4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipv4"}},[t._v("#")]),t._v(" IPv4")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("185.222.222.222")])]),t._v(" "),a("li",[a("code",[t._v("45.11.45.11")])])]),t._v(" "),a("p",[t._v("Note: The old address "),a("code",[t._v("185.184.222.222")]),t._v(" will be deprecated soon.")]),t._v(" "),a("h3",{attrs:{id:"ipv6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipv6"}},[t._v("#")]),t._v(" IPv6")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("2a09::")])]),t._v(" "),a("li",[a("code",[t._v("2a11::")])])]),t._v(" "),a("p",[t._v("Note: The old address "),a("code",[t._v("2a09::1")]),t._v(" will be deprecated soon. When using IPv6 address, you must use specific hostname "),a("code",[t._v("dot.sb")])]),t._v(" "),a("h3",{attrs:{id:"ipv6-with-full-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipv6-with-full-address"}},[t._v("#")]),t._v(" IPv6 with Full Address")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("2a09:0000:0000:0000:0000:0000:0000:0000")])]),t._v(" "),a("li",[a("code",[t._v("2a11:0000:0000:0000:0000:0000:0000:0000")])])]),t._v(" "),a("p",[a("em",[t._v("No Logging, DNSSEC enabled")])]),t._v(" "),a("h3",{attrs:{id:"pem-crt-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pem-crt-file"}},[t._v("#")]),t._v(" PEM / CRT File")]),t._v(" "),a("p",[a("a",{attrs:{href:"dns.sb.crt"}},[t._v("https://github.com/dns-sb/DoT/blob/master/cert/dns.sb.crt")])]),t._v(" "),a("h3",{attrs:{id:"spki-pin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spki-pin"}},[t._v("#")]),t._v(" SPKI Pin")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("0Ot+uUBCfWZkE2GFQQcIpR9GmuhWioGEl+K11FhNmHk=\n")])])]),a("p",[t._v("You can generate and verify SPKI PIN with the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" openssl s_client -connect "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("185.222")]),t._v(".222.222:853 "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" openssl x509 -pubkey -noout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" openssl pkey -pubin -outform der "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" openssl dgst -sha256 -binary "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" openssl enc -base64\n")])])]),a("h2",{attrs:{id:"example-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configurations"}},[t._v("#")]),t._v(" Example Configurations")]),t._v(" "),a("h3",{attrs:{id:"unbound"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unbound"}},[t._v("#")]),t._v(" Unbound")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dns-sb/DoT/blob/master/example/unbound.conf",target:"_blank",rel:"noopener noreferrer"}},[t._v("unbound.conf"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"how-to-set-dns-sb-dot-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-dns-sb-dot-server"}},[t._v("#")]),t._v(" How to set DNS.SB DoT Server")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/dot/android/"}},[t._v("Android")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/dot/linux/"}},[t._v("Linux")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/dot/windows/"}},[t._v("Windows")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/dot/apple/"}},[t._v("iOS & macOS")])],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);