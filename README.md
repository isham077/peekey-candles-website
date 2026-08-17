# Pee Key Candle Works And Trading Website

A production-ready business website for **Pee Key Candle Works And Trading**, a candle manufacturer based in Wayanad, Kerala, India.

Built as a modern frontend application with AI-assisted UI generation, deployed on **Vercel**, accelerated and secured by **Cloudflare**, and configured with a custom business domain and email infrastructure.

---

## 🌐 Live Website

**Production**
https://peekeycandles.in

---

# Project Overview

This project was developed to establish a professional online presence for a candle manufacturing business while leveraging modern frontend development, deployment, and DevOps practices.


The website is designed to:

- Showcase the company's product range
- Generate wholesale and B2B enquiries
- Build brand credibility
- Improve search engine discoverability
- Provide fast global content delivery
- Maintain enterprise-level security with minimal infrastructure

---

# Architecture

```
                    User
                      │
                      ▼
              Cloudflare CDN
       (SSL, DNS, Security, Cache)
                      │
                      ▼
            Vercel Edge Network
                      │
                      ▼
              React + Vite App
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
 Google Forms                WhatsApp API
        │
        ▼
 Google Sheets
        │
        ▼
 Business Lead Management
```

Frontend-only architecture.

No custom backend server required.

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

---

## AI Assisted Development

- Antigravity AI
- Google Stitch

Used for:

- Initial UI generation
- Layout prototyping
- Component generation
- Design refinement

---

## Hosting

- Vercel

Features:

- Edge deployment
- Automatic CI/CD
- HTTPS
- Preview deployments
- Global CDN

---

## Networking & Infrastructure

### Cloudflare

Configured as the DNS provider and security layer.

Implemented:

- DNS Management
- Global CDN
- Universal SSL Certificate
- TLS 1.3
- HTTP/2
- HTTP/3
- Automatic HTTPS Rewrites
- Browser Integrity Check
- Email Routing
- DDoS Protection
- Managed Security Rules
- Schema Validation
- JavaScript Library Protection
- Security Headers
- Intelligent Proxying

---

## Domain

Domain Registrar:

GoDaddy

Production Domain

https://peekeycandles.in

DNS Management

Cloudflare

---

# Business Email Infrastructure

Configured using:

Cloudflare Email Routing

Professional business email:

```
info@peekeycandles.in
```

Current Routing

```
info@peekeycandles.in
            │
            ▼
Cloudflare Email Routing
            │
            ▼
Business Gmail Inbox
```

Advantages

- Custom business email
- Zero monthly cost
- Future migration ready
- Professional communication

---

# Security Configuration

Implemented

- Universal SSL
- HTTPS
- TLS 1.3
- HTTP/2
- HTTP/3
- Browser Integrity Check
- Automatic HTTPS Rewrite
- Cloudflare Managed Rules
- Layer 3/4 DDoS Protection
- HTTP DDoS Protection
- SSL DDoS Protection
- Email Obfuscation
- AI Bot Policy Configuration

---

# Performance Optimization

Configured

- Cloudflare CDN
- Static asset caching
- Edge delivery
- Compression
- Browser caching
- Global network routing

---

# Lead Generation System

Customer Flow

```
Website

↓

Bulk Enquiry Form

↓

Google Forms

↓

Google Sheets

↓

Business Owner
```

Instant Contact

- WhatsApp Integration

---

# Google Business Profile

Configured

- Business Profile
- Business Description
- Website
- Phone Number
- Service Areas

Verification

Pending Google Review

---

# Project Structure

```
peekey-candles
│
├── public
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── App.jsx
│   └── main.jsx
│
├── screenshots
├── package.json
├── vite.config.js
└── README.md
```

---

# Development Workflow

```
Requirement Analysis

↓

UI Design (AI)

↓

Component Assembly

↓

React Development

↓

Testing

↓

GitHub

↓

Vercel Deployment

↓

Domain Configuration

↓

Cloudflare Integration

↓

SSL Configuration

↓

Email Infrastructure

↓

Google Business Profile

↓

Production
```

---

# Features

- Responsive Design
- Mobile First
- Product Catalogue
- Upcoming Products
- Wholesale Enquiry
- WhatsApp Contact
- Fast Loading
- Professional Branding
- Secure HTTPS
- CDN Accelerated
- Business Email
- SEO Ready

---

# Future Roadmap

## Business

- Google Search Console
- Google Analytics
- Bing Webmaster
- Product Schema
- Local SEO
- Review Management

---

## Technical

- ERP Integration
- Admin Dashboard
- Inventory Management
- Authentication
- Product Search
- Shopping Cart
- Payment Gateway
- Order Tracking
- API Backend
- Docker Deployment

---

# Repository Purpose

This repository showcases the development of a production-ready business website built with modern frontend technologies, AI-assisted design tools, CDN architecture, managed DNS, secure SSL infrastructure, and serverless deployment practices.

The project emphasizes practical web engineering and deployment rather than traditional backend development.

---

# Author

Developed for

**Pee Key Candle Works And Trading**

Wayanad, Kerala, India

---

# License

This repository contains the production source code of the official Pee Key Candle Works And Trading website.

Unauthorized commercial reuse is prohibited.
