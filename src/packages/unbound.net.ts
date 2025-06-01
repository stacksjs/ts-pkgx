/**
 * **unbound** - Unbound is a validating, recursive, and caching DNS resolver.
 *
 * @domain `unbound.net`
 * @programs `unbound`, `unbound-anchor`, `unbound-checkconf`, `unbound-control`, `unbound-control-setup`, ... (+1 more)
 * @version `1.23.0` (11 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/unbound-net.md
 *
 * @install `sh <(curl https://pkgx.sh) +unbound.net -- $SHELL -i`
 * @aliases `unbound`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.unbound
 * // Or access via domain
 * const samePkg = pantry.unboundnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "unbound"
 * console.log(pkg.description) // "Unbound is a validating, recursive, and caching..."
 * console.log(pkg.programs)    // ["unbound", "unbound-anchor", ...]
 * console.log(pkg.versions[0]) // "1.23.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unbound-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unboundPackage = {
  /**
   * The display name of this package.
   */
  name: 'unbound' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'unbound.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Unbound is a validating, recursive, and caching DNS resolver.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unbound.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +unbound.net -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'unbound',
    'unbound-anchor',
    'unbound-checkconf',
    'unbound-control',
    'unbound-control-setup',
    'unbound-host',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.23.0',
    '1.22.0',
    '1.21.1',
    '1.21.0',
    '1.20.0',
    '1.19.3',
    '1.19.2',
    '1.19.1',
    '1.19.0',
    '1.18.0',
    '1.17.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'unbound',
  ] as const,
  fullPath: 'unbound.net' as const,
}

export type UnboundPackage = typeof unboundPackage
