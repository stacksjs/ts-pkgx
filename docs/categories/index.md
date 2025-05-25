# Category Index

Browse ts-pkgx packages organized by functionality and use case. This directory contains category-specific pages that group related packages together for easier discovery.

## 📂 Available Categories

### 🔧 Programming & Development

#### [Programming Languages](./programming-languages.md) (24 packages)
Core programming languages and their runtimes
- Node.js, Python, Rust, Go, Swift, TypeScript, and more

#### [JavaScript & Node.js Ecosystem](./javascript-node-js-ecosystem.md) (12 packages)
JavaScript runtimes, frameworks, and tools
- Bun, Deno, Angular, Vite, Expo, Flutter

#### [Development Tools](./development-tools.md) (6 packages)
Essential development utilities and editors
- Git, Vim, Neovim, Prettier

### 📦 Package Management & Build

#### [Package Managers & Build Tools](./package-managers-build-tools.md) (13 packages)
Package managers and build systems
- npm, pip, Maven, Gradle, CMake, Meson

### 🗄️ Data & Storage

#### [Databases](./databases.md) (8 packages)
Database systems and data storage solutions
- PostgreSQL, MySQL, Redis, MongoDB, SQLite

### ☁️ Infrastructure & Operations

#### [DevOps & Infrastructure](./devops-infrastructure.md) (13 packages)
Container orchestration, infrastructure as code, and deployment tools
- Docker, Kubernetes, Terraform, Helm, Ansible

#### [Cloud Platforms & Services](./cloud-platforms-services.md) (9 packages)
Cloud platform CLIs and deployment services
- AWS, GitHub, Heroku, Fly.io, Railway

#### [Monitoring & Observability](./monitoring-observability.md) (2 packages)
Application monitoring and observability tools
- Grafana, Sentry

### 🔒 Security & Quality

#### [Security & Authentication](./security-authentication.md) (3 packages)
Security tools and authentication services
- Bitwarden, 1Password, HashiCorp

#### [Testing & Quality Assurance](./testing-quality-assurance.md) (1 package)
Testing frameworks and quality assurance tools
- pytest

### 🌐 Web & Networking

#### [Web Servers & Proxies](./web-servers-proxies.md) (3 packages)
Web servers, reverse proxies, and load balancers
- Nginx, Apache, Traefik

#### [CLI Tools & Utilities](./cli-tools-utilities.md) (2 packages)
Command-line utilities and system tools
- curl, htop

## 📊 Category Statistics

- **Total Categories**: 12
- **Categorized Packages**: 87
- **Uncategorized Packages**: 779 (in [Other Utilities](../package-catalog.md#other-utilities))

## 🔍 Finding Packages

### By Category
Browse the category pages above to find packages by functionality.

### By Name
Use the [Package Catalog](../package-catalog.md) for a complete alphabetical listing with search functionality.

### By Individual Package
Visit the [Package Index](../packages/) for direct access to individual package documentation.

## 🚀 Quick Examples

### Install by Category
```bash
# Programming languages
pkgx node python rust go

# Databases
pkgx postgresql mysql redis

# DevOps tools
pkgx docker kubernetes terraform
```

### Access in Code
```typescript
import { pantry } from 'ts-pkgx'

// Get packages by category
const languages = [
  pantry.nodejsorg,
  pantry.pythonorg,
  pantry.rustlangorg
]

const databases = [
  pantry.postgresqlorg,
  pantry.mysqlcom,
  pantry.redisio
]
```

## 🔗 Navigation

- [← Back to Documentation Home](../README.md)
- [📋 Complete Package Catalog](../package-catalog.md)
- [📦 Individual Packages](../packages/)

---

*Categories are automatically maintained and updated when new packages are added.*
