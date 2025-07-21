/**
 * **lavinmq** - Lightweight and fast AMQP (0-9-1) server
 *
 * @domain `lavinmq.com`
 * @programs `lavinmq`, `lavinmqctl`, `lavinmqperf`
 * @version `2.4.1` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lavinmq`
 * @name `lavinmq`
 * @dependencies `openssl.org^1.1`, `pcre.org/v2@10`, `libevent.org@2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lavinmq
 * // Or access via domain
 * const samePkg = pantry.lavinmqcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lavinmq"
 * console.log(pkg.description) // "Lightweight and fast AMQP (0-9-1) server"
 * console.log(pkg.programs)    // ["lavinmq", "lavinmqctl", ...]
 * console.log(pkg.versions[0]) // "2.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lavinmq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lavinmqPackage = {
  /**
   * The display name of this package.
   */
  name: 'lavinmq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lavinmq.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Lightweight and fast AMQP (0-9-1) server' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lavinmq.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lavinmq' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lavinmq',
    'lavinmqctl',
    'lavinmqperf',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'pcre.org/v2@10',
    'libevent.org@2',
    'hboehm.info/gc@8',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.1',
    '2.4.0',
    '2.3.0',
    '2.2.0',
    '2.1.0',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lavinmq.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lavinmq' as const,
}

export type LavinmqPackage = typeof lavinmqPackage
