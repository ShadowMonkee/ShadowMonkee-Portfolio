export interface Project {
  slug: string;
  title: string;
  tech: string;
  image: string;
  summary: string;
  description: string[];
  highlights: string[];
}

export type CyberProjectType = 'Writeup' | 'Report' | 'Tool' | 'Research';
export type FindingSeverity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Info';

export interface CyberFinding {
  severity: FindingSeverity;
  title: string;
  description: string;
}

export interface CyberProjectDetail {
  overview: string[];
  methodology?: string[];
  findings?: CyberFinding[];
  tools?: string[];
  highlights: string[];
  difficulty?: string;
  date?: string;
  duration?: string;
}

export interface CyberProject {
  id: string;
  type: CyberProjectType;
  title: string;
  platform: string;
  tags: string[];
  description: string;
  link?: string;
  status: 'published' | 'redacted' | 'wip';
  detail?: CyberProjectDetail;
}

export const PROJECTS: Project[] = [
  {
    slug: 'ecommerce',
    title: 'E-Commerce Platform',
    tech: 'Java · Spring Boot · Angular · CI/CD',
    image: 'assets/Images/ecommerce.png',
    summary: 'A scalable e-commerce platform built for real-world business needs.',
    description: [
      'Designed and implemented a full-stack e-commerce system.',
      'Secure role-based backoffice using Spring Security.',
      'CI/CD pipelines for automated testing and deployment.'
    ],
    highlights: [
      'Modular microservice-friendly architecture',
      'Secure authentication and authorization',
      'Optimized for performance under load'
    ]
  },
  {
    slug: 'decebalus',
    title: 'Rust Cybersecurity Tool',
    tech: 'Rust · Networking · CLI · Security',
    image: 'assets/Images/decebalus.png',
    summary: 'High-performance cybersecurity tooling written in Rust.',
    description: [
      'Built a modular CLI tool for network reconnaissance.',
      'Designed for concurrency, safety, and extensibility.',
      'Inspired by professional red-team workflows.'
    ],
    highlights: [
      'Memory-safe concurrency',
      'Extensible plugin architecture',
      'Designed for large-scale networks'
    ]
  },
  {
    slug: 'nonprofit',
    title: 'Non-Profit Community Mobile App',
    tech: 'Java · Spring Boot · REST APIs · JWT Auth',
    image: 'assets/Images/nonprofit.png',
    summary: 'Backend system for a community-focused mobile application supporting non-profit engagement and communication.',
    description: [
      'Designed and developed a secure Spring Boot backend to support a community mobile application for a non-profit organisation.',
      'Implemented RESTful APIs for announcements, events, and member interactions, ensuring clean separation of concerns and scalability.',
      'Focused on reliability, concurrency handling, and maintainability to support future feature growth and increased user activity.',
      'Worked closely with stakeholders to translate community needs into technical solutions.'
    ],
    highlights: [
      'Secure authentication and authorization using JWT',
      'Scalable REST API architecture designed for mobile clients',
      'Clean modular backend structure following Spring best practices',
      'Built with future extensibility in mind for new community features'
    ]
  }
];

export const CYBER_PROJECTS: CyberProject[] = [
  {
    id: 'htb-escape',
    type: 'Writeup',
    title: 'HackTheBox — Escape',
    platform: 'HackTheBox',
    tags: ['Active Directory', 'Windows', 'MSSQL', 'ADCS'],
    description:
      'Exploited an MSSQL credential leak via a publicly readable SMB share to gain initial foothold. Escalated privileges by abusing a misconfigured Active Directory Certificate Services template to forge a domain admin certificate.',
    link: 'https://hackthebox.com',
    status: 'published',
    detail: {
      difficulty: 'Medium',
      date: 'November 2023',
      overview: [
        'Escape is a Medium-difficulty Windows Active Directory machine centered on two common real-world attack paths: credential exposure via a misconfigured file share and privilege escalation through Active Directory Certificate Services (ADCS).',
        'The machine demonstrates why default configurations in enterprise environments are critically dangerous — from world-readable SMB shares to a certificate template misconfiguration that allows forging privileged authentication tokens.',
      ],
      methodology: [
        'Reconnaissance: Enumerated open ports with Nmap. Identified SMB (445), LDAP (389/636), and MSSQL (1433) — indicating a domain controller with SQL Server running.',
        'SMB Enumeration: Used smbclient to list shares accessible anonymously. Found a "Public" share containing a PDF with SQL Server credentials in cleartext.',
        'Database Access: Connected to MSSQL via Impacket mssqlclient.py. Triggered an NTLM hash capture using xp_dirtree to force a server-side UNC path request to a Responder listener.',
        'Foothold: Cracked the captured NetNTLMv2 hash offline with Hashcat. Authenticated to the host via Evil-WinRM as a low-privileged domain user.',
        'Privilege Escalation: Enumerated ADCS using Certipy. Identified a vulnerable certificate template with the ESC1 misconfiguration — allowing enrollment on behalf of any user, including Domain Admins.',
        'Domain Takeover: Requested a certificate impersonating the Domain Administrator. Used Pass-the-Certificate to obtain a Kerberos TGT and performed DCSync to dump all domain credential hashes.',
      ],
      tools: ['Nmap', 'smbclient', 'Impacket', 'Responder', 'Hashcat', 'Evil-WinRM', 'Certipy', 'Rubeus'],
      highlights: [
        'Retrieved plaintext credentials from a world-readable SMB share',
        'Captured and cracked a NetNTLMv2 hash via MSSQL server-side request forgery',
        'Identified and exploited an ESC1 ADCS misconfiguration to forge a domain admin certificate',
        'Completed domain takeover via DCSync after certificate-based privilege escalation',
      ],
    },
  },
  {
    id: 'webapp-pentest-report',
    type: 'Report',
    title: 'Web Application Penetration Test',
    platform: 'Freelance Engagement',
    tags: ['OWASP Top 10', 'SQL Injection', 'Broken Auth', 'XSS'],
    description:
      'Full-scope penetration test of a client e-commerce platform. Identified and documented critical vulnerabilities including SQL injection on checkout endpoints and broken session management. Delivered remediation report with severity ratings and fix guidance.',
    status: 'redacted',
    detail: {
      date: 'Q3 2024',
      duration: '5 days',
      overview: [
        'A full-scope black-box web application penetration test conducted against a mid-size e-commerce platform. The engagement covered authentication flows, business logic, data handling, and API surface area across the entire application.',
        'Multiple critical and high severity vulnerabilities were identified. Per the engagement NDA, application details, company identity, and specific exploit information have been withheld. The summary below reflects finding categories only.',
      ],
      methodology: [
        'Scoping & Rules of Engagement: Defined target scope covering the web application, mobile API endpoints, and admin portal. Excluded third-party payment processors and CDN infrastructure.',
        'Passive Reconnaissance: Conducted OSINT, subdomain enumeration, and technology stack fingerprinting using passive sources and public certificate transparency logs.',
        'Authentication Testing: Manual testing of login flows, session token entropy, password reset mechanisms, and multi-factor authentication bypass vectors.',
        'Business Logic Analysis: Tested checkout flow integrity, discount code handling, quantity manipulation, and order state tampering.',
        'Injection Testing: Assessed all input surfaces and API parameters for SQLi, stored and reflected XSS, SSRF, and XXE.',
        'Reporting: Delivered a full penetration test report including executive summary, technical findings with CVSS 3.1 scores, proof-of-concept steps, and prioritised remediation guidance.',
      ],
      findings: [
        { severity: 'Critical', title: '[REDACTED]', description: 'Finding details withheld per engagement NDA.' },
        { severity: 'Critical', title: '[REDACTED]', description: 'Finding details withheld per engagement NDA.' },
        { severity: 'High',     title: '[REDACTED]', description: 'Finding details withheld per engagement NDA.' },
        { severity: 'High',     title: '[REDACTED]', description: 'Finding details withheld per engagement NDA.' },
        { severity: 'Medium',   title: '[REDACTED]', description: 'Finding details withheld per engagement NDA.' },
        { severity: 'Low',      title: '[REDACTED]', description: 'Finding details withheld per engagement NDA.' },
      ],
      highlights: [
        '2 Critical, 2 High, 1 Medium, and 1 Low severity findings identified',
        'Full CVSS 3.1 scoring and remediation guidance delivered for all findings',
        'Executive summary and technical report completed within the agreed engagement window',
        'Follow-up verification testing scheduled post-remediation',
      ],
    },
  },
  {
    id: 'thm-advent-2024',
    type: 'Writeup',
    title: 'TryHackMe — Advent of Cyber 2024',
    platform: 'TryHackMe',
    tags: ['Log Analysis', 'SIEM', 'Malware Analysis', 'Web Exploitation'],
    description:
      'Completed all 24 daily challenges covering blue and red team techniques: log investigation, SIEM triage, web app exploitation, malware reverse engineering, and phishing analysis.',
    link: 'https://tryhackme.com/r/room/adventofcyber2024',
    status: 'published',
    detail: {
      difficulty: 'Easy – Medium',
      date: 'December 2024',
      duration: '24 days',
      overview: [
        "Advent of Cyber 2024 is TryHackMe's annual 24-day challenge running through December. Each day introduces a new cybersecurity concept through a guided, story-driven scenario spanning both offensive and defensive disciplines.",
        'The 2024 edition was themed around a fictional SOC investigation, building from initial alert triage through forensic analysis, malware reverse engineering, and final attribution — giving each challenge a narrative thread.',
      ],
      methodology: [
        'Days 1–5 (OPSEC & Web Exploitation): Investigated digital footprints and metadata artifacts. Performed IDOR discovery and XSS exploitation on a fictional web platform.',
        'Days 6–10 (Log Analysis & SIEM): Triaged Windows Event Logs and Splunk dashboards to reconstruct an attacker\'s lateral movement through a corporate network.',
        'Days 11–15 (Network & Forensics): Captured and analysed PCAP files with Wireshark. Performed memory forensics on a compromised endpoint using Volatility.',
        'Days 16–20 (Malware & Reverse Engineering): Statically and dynamically analysed obfuscated PowerShell scripts and a Go-based malware sample using dnSpy and Ghidra.',
        'Days 21–24 (Advanced Topics): Active Directory enumeration and abuse, phishing email header analysis, and a capstone challenge requiring multiple techniques.',
      ],
      tools: ['Splunk', 'Wireshark', 'Volatility', 'Ghidra', 'Burp Suite', 'PowerShell', 'dnSpy', 'Nmap'],
      highlights: [
        'Completed all 24 challenges across blue team, red team, and forensics domains',
        'Practiced SIEM triage and log correlation using realistic attack patterns',
        'Reversed obfuscated malware samples using both static and dynamic analysis',
        'Applied Active Directory enumeration techniques in a guided lab environment',
      ],
    },
  },
];
