webpackJsonp([0x5015a8c32af68000],{"./node_modules/json-loader/index.js!./.cache/json/security-ddos-denial-of-service-attacks.json":function(e,t){e.exports={data:{markdownRemark:{html:"<h2>DDoS (Distributed Denial of Service)</h2>\n<p>A Distributed Denial of Service (DDoS) attack is an attempt to make an online service or a website unavailable by overloading it with huge floods of traffic generated from multiple sources.\nUnlike a Denial of Service (DoS) attack, in which one computer and one Internet connection is used to flood a targeted resource with packets, a DDoS attack uses many computers and many Internet connections, often distributed globally in what is referred to as a botnet.</p>\n<h3>Types of DDoS Attacks</h3>\n<p>DDoS attacks can be broadly categorized into three categories −</p>\n<ol>\n<li>Volume-based Attacks</li>\n<li>Protocol Attacks</li>\n<li>Application Layer Attacks</li>\n</ol>\n<h3>Volume-Based Attacks</h3>\n<p>Volume-based attacks include TCP floods, UDP floods, ICMP floods, and other spoofedpacket floods. These are also called Layer 3 &#x26; 4 * Attacks. Here, an attacker tries to saturate the bandwidth of the target site. The attack magnitude is measured in Bits per Second (bps).</p>\n<ul>\n<li>\n<p><strong>UDP Flood</strong> − A UDP flood is used to flood random ports on a remote host with numerous UDP packets, more specifically port number 53. Specialized firewalls can be used to filter out or block malicious UDP packets.</p>\n</li>\n<li>\n<p><strong>ICMP Flood</strong> − This is similar to UDP flood and used to flood a remote host with numerous ICMP Echo Requests. This type of attack can consume both outgoing and incoming bandwidth and a high volume of ping requests will result in overall system slowdown.</p>\n</li>\n<li>\n<p><strong>HTTP Flood</strong> − The attacker sends HTTP GET and POST requests to a targeted web server in a large volume which cannot be handled by the server and leads to denial of additional connections from legitimate clients.</p>\n</li>\n<li>\n<p><strong>Amplification Attack</strong> − The attacker makes a request that generates a large response which includes DNS requests for large TXT records and HTTP GET requests for large files like images, PDFs, or any other data files.</p>\n</li>\n</ul>\n<h3>Protocol Attacks</h3>\n<p>Protocol attacks include SYN floods, Ping of Death, fragmented packet attacks, Smurf DDoS, etc. This type of attack consumes actual server resources and other resources like firewalls and load balancers. The attack magnitude is measured in Packets per Second.</p>\n<ul>\n<li>\n<p><strong>DNS Flood</strong> − DNS floods are used for attacking both the infrastructure and a DNS application to overwhelm a target system and consume all its available network bandwidth.</p>\n</li>\n<li>\n<p><strong>SYN Flood</strong> − The attacker sends TCP connection requests faster than the targeted machine can process them, causing network saturation. Administrators can tweak TCP stacks to mitigate the effect of SYN floods. To reduce the effect of SYN floods, you can reduce the timeout until a stack frees memory allocated to a connection, or selectively dropping incoming connections using a firewall or iptables.</p>\n</li>\n<li>\n<p><strong>Ping of Death</strong> − The attacker sends malformed or oversized packets using a simple ping command. IP allows sending 65,535 bytes packets but sending a ping packet larger than 65,535 bytes violates the Internet Protocol and could cause memory overflow on the target system and finally crash the system. To avoid Ping of Death attacks and its variants, many sites block ICMP ping messages altogether at their firewalls.</p>\n</li>\n</ul>\n<h3>Application Layer Attacks</h3>\n<p>Application Layer Attacks include Slowloris, Zero-day DDoS attacks, DDoS attacks that target Apache, Windows or OpenBSD vulnerabilities and more. Here the goal is to crash the web server. The attack magnitude is measured in Requests per Second.</p>\n<ul>\n<li>\n<p><strong>Application Attack</strong> − This is also called Layer 7 Attack, where the attacker makes excessive log-in, database-lookup, or search requests to overload the application. It is really difficult to detect Layer 7 attacks because they resemble legitimate website traffic.</p>\n</li>\n<li>\n<p><strong>Slowloris</strong> − The attacker sends huge number of HTTP headers to a targeted web server, but never completes a request. The targeted server keeps each of these false connections open and eventually overflows the maximum concurrent connection pool, and leads to denial of additional connections from legitimate clients.</p>\n</li>\n<li>\n<p><strong>NTP Amplification</strong> − The attacker exploits publically-accessible Network Time Protocol (NTP) servers to overwhelm the targeted server with User Datagram Protocol (UDP) traffic.</p>\n</li>\n<li>\n<p><strong>Zero-day DDoS Attacks</strong> − A zero-day vulnerability is a system or application flaw previously unknown to the vendor, and has not been fixed or patched. These are new type of attacks coming into existence day by day, for example, exploiting vulnerabilities for which no patch has yet been released.</p>\n</li>\n</ul>\n<h3>How to Fix a DDoS Attack</h3>\n<p>There are quite a few DDoS protection options which you can apply depending on the type of DDoS attack.</p>\n<p>Your DDoS protection starts from identifying and closing all the possible OS and application level vulnerabilities in your system, closing all the possible ports, removing unnecessary access from the system and hiding your server behind a proxy or CDN system.</p>\n<p>If you see a low magnitude of the DDoS, then you can find many firewall-based solutions which can help you in filtering out DDoS based traffic. But if you have high volume of DDoS attack like in gigabits or even more, then you should take the help of a DDoS protection service provider that offers a more holistic, proactive and genuine approach.</p>\n<p>You must be careful while approaching and selecting a DDoS protection service provider. There are number of service providers who want to take advantage of your situation. If you inform them that you are under DDoS attack, then they will start offering you a variety of services at unreasonably high costs.</p>\n<p>We can suggest you a simple and working solution which starts with a search for a good DNS solution provider who is flexible enough to configure A and CNAME records for your website. Second, you will need a good CDN provider that can handle big DDoS traffic and provide you DDoS protection service as a part of their CDN package.</p>\n<p>Assume your server IP address is AAA.BBB.CCC.DDD. Then you should do the following DNS configuration −</p>\n<ul>\n<li>Create a A Record in DNS zone file as shown below with a DNS identifier, for example, ARECORDID and keep it secret from the outside world.</li>\n<li>Now ask your CDN provider to link the created DNS identifier with a URL, something like cdn.someotherid.domain.com.</li>\n<li>You will use the CDN URL cdn.someotherid.domain.com to create two CNAME records, the first one to point to www and the second record to point to @ as shown below.</li>\n</ul>\n<p>You can take the help from your system administrator to understand these points and configure your DNS and CDN appropriately. Finally, you will have the following configuration at your DNS.</p>\n<h3>More Information</h3>\n<p><a href='https://www.us-cert.gov/ncas/tips/ST04-015'>Understanding Denial-of-Service Attacks</a><br></p>",fields:{slug:"/security/ddos-denial-of-service-attacks/"},frontmatter:{title:"DDoS Distributed Denial of Service"}}},pathContext:{slug:"/security/ddos-denial-of-service-attacks/"}}}});
//# sourceMappingURL=path---security-ddos-denial-of-service-attacks-f89395ea34704209cd87.js.map