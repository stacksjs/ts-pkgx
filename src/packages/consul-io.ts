/**
 * **consul** - Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure.
 *
 * @domain `consul.io`
 * @programs `consul`
 * @version `1.21.1` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) consul`
 * @name `consul`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.consul
 * // Or access via domain
 * const samePkg = pantry.consulio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "consul"
 * console.log(pkg.description) // "Consul is a distributed, highly available, and ..."
 * console.log(pkg.programs)    // ["consul"]
 * console.log(pkg.versions[0]) // "1.21.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/consul-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const consulPackage = {
  /**
   * The display name of this package.
   */
  name: 'consul' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'consul.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/consul.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) consul' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'consul',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.21.1',
    '1.21.0',
    '1.20.6',
    '1.20.5',
    '1.20.4',
    '1.20.3',
    '1.20.2',
    '1.20.1',
    '1.20.0',
    '1.19.2',
    '1.19.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'consul' as const,
}

export type ConsulPackage = typeof consulPackage
