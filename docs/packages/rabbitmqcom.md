# rabbitmq.com

> Open source RabbitMQ: core server and tier 1 (built-in) plugins

## Package Information

- **Domain**: `rabbitmqcom`
- **Name**: `rabbitmq.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rabbitmq.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +rabbitmq.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `rabbitmqctl`
- `rabbitmq-defaults`
- `rabbitmq-diagnostics`
- `rabbitmq-env`
- `rabbitmq-plugins`
- `rabbitmq-queues`
- `rabbitmq-server`
- `rabbitmq-streams`
- `rabbitmq-upgrade`
- `vmware-rabbitmq`

## Available Versions

<details>
<summary>Show all 32 versions</summary>

- `4.1.0`, `4.0.9`, `4.0.8`, `4.0.7`, `4.0.6`
- `4.0.5`, `4.0.4`, `4.0.3`, `4.0.2`, `4.0.1`
- `4.0.0`, `3.13.7`, `3.13.6`, `3.13.5`, `3.13.4`
- `3.13.3`, `3.13.2`, `3.13.1`, `3.13.0`, `3.12.14`
- `3.12.13`, `3.12.12`, `3.12.11`, `3.12.10`, `3.12.9`
- `3.12.8`, `3.12.7`, `3.12.6`, `3.11.28`, `3.11.26`
- `3.11.25`, `3.11.24`

</details>

**Latest Version**: `4.1.0`

### Install Specific Version

```bash
# Install specific version
pkgx rabbitmq.com@4.1.0
```

## Dependencies

This package depends on:

- `erlang.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rabbitmqcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rabbitmq.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
