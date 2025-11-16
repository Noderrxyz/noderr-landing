# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

We take the security of Noderr Protocol seriously. If you believe you have found a security vulnerability in the landing page, please report it to us as described below.

### How to Report

**Email:** security@noderr.xyz

Please include the following information in your report:

- **Type of vulnerability** (e.g., XSS, clickjacking, information disclosure)
- **Full paths of source file(s)** related to the vulnerability
- **Location of the affected source code** (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue**, including how an attacker might exploit it

### What to Expect

- **Acknowledgment:** We will acknowledge receipt of your vulnerability report within 48 hours
- **Updates:** We will send you regular updates about our progress (at least every 7 days)
- **Timeline:** We aim to fix critical vulnerabilities within 30 days of disclosure
- **Credit:** We will credit you in our security advisory (unless you prefer to remain anonymous)

### Disclosure Policy

- **Coordinated Disclosure:** Please give us reasonable time to fix the issue before public disclosure
- **Public Disclosure:** We will publicly disclose the vulnerability after a fix is released
- **Security Advisory:** We will publish a GitHub Security Advisory with details and credits

## Security Features

Noderr Landing implements the following security measures:

### Application Security

- ✅ **Security Headers** - Helmet.js with strict CSP configuration
- ✅ **Rate Limiting** - Prevents DoS attacks
- ✅ **Dependency Scanning** - Automated vulnerability monitoring via Dependabot
- ✅ **HTTPS Only** - All production traffic encrypted

### Infrastructure Security

- 🔄 **WAF** - Web Application Firewall (planned)
- 🔄 **DDoS Protection** - Cloudflare or similar (planned)
- 🔄 **Security Monitoring** - Centralized logging and alerting (planned)

## Security Contacts

- **Security Team:** security@noderr.xyz
- **General Inquiries:** contact@noderr.xyz
- **GitHub Security Advisories:** https://github.com/Noderrxyz/noderr-landing/security/advisories

## Acknowledgments

We thank the following security researchers for responsibly disclosing vulnerabilities:

- *No public disclosures yet - be the first!*

---

**Last Updated:** November 16, 2025  
**Version:** 1.0
