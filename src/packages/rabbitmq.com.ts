/**
 * **rabbitmq.com** - Open source RabbitMQ: core server and tier 1 (built-in) plugins
 *
 * @domain `rabbitmq.com`
 * @programs `rabbitmqctl`, `rabbitmq-defaults`, `rabbitmq-diagnostics`, `rabbitmq-env`, `rabbitmq-plugins`, ... (+5 more)
 * @version `4.1.1` (33 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/rabbitmq-com.md
 *
 * @install `sh <(curl https://pkgx.sh) +rabbitmq.com -- $SHELL -i`
 * @dependencies `erlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rabbitmqcom
 * console.log(pkg.name)        // "rabbitmq.com"
 * console.log(pkg.description) // "Open source RabbitMQ: core server and tier 1 (b..."
 * console.log(pkg.programs)    // ["rabbitmqctl", "rabbitmq-defaults", ...]
 * console.log(pkg.versions[0]) // "4.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rabbitmq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rabbitmqcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'rabbitmq.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rabbitmq.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Open source RabbitMQ: core server and tier 1 (built-in) plugins' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rabbitmq.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +rabbitmq.com -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rabbitmqctl',
    'rabbitmq-defaults',
    'rabbitmq-diagnostics',
    'rabbitmq-env',
    'rabbitmq-plugins',
    'rabbitmq-queues',
    'rabbitmq-server',
    'rabbitmq-streams',
    'rabbitmq-upgrade',
    'vmware-rabbitmq',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'erlang.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.1.1',
    '4.1.0',
    '4.0.9',
    '4.0.8',
    '4.0.7',
    '4.0.6',
    '4.0.5',
    '4.0.4',
    '4.0.3',
    '4.0.2',
    '4.0.1',
    '4.0.0',
    '3.13.7',
    '3.13.6',
    '3.13.5',
    '3.13.4',
    '3.13.3',
    '3.13.2',
    '3.13.1',
    '3.13.0',
    '3.12.14',
    '3.12.13',
    '3.12.12',
    '3.12.11',
    '3.12.10',
    '3.12.9',
    '3.12.8',
    '3.12.7',
    '3.12.6',
    '3.11.28',
    '3.11.26',
    '3.11.25',
    '3.11.24',
  ] as const,
  aliases: [] as const,
  fullPath: 'rabbitmq.com' as const,
}

export type RabbitmqcomPackage = typeof rabbitmqcomPackage
