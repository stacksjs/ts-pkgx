/**
 * **mitmproxy** - An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers.
 *
 * @domain `mitmproxy.org`
 * @programs `mitmproxy`
 * @version `12.1.1` (27 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/mitmproxy-org.md
 *
 * @install `sh <(curl https://pkgx.sh) mitmproxy`
 * @name `mitmproxy`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mitmproxy
 * // Or access via domain
 * const samePkg = pantry.mitmproxyorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mitmproxy"
 * console.log(pkg.description) // "An interactive TLS-capable intercepting HTTP pr..."
 * console.log(pkg.programs)    // ["mitmproxy"]
 * console.log(pkg.versions[0]) // "12.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mitmproxy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mitmproxyPackage = {
  /**
   * The display name of this package.
   */
  name: 'mitmproxy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mitmproxy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mitmproxy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mitmproxy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mitmproxy',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '12.1.1',
    '12.1.0',
    '12.0.1',
    '12.0.0',
    '11.1.3',
    '11.1.2',
    '11.1.1',
    '11.1.0',
    '11.0.2',
    '11.0.1',
    '11.0.0',
    '10.4.2',
    '10.4.1',
    '10.4.0',
    '10.3.0',
    '10.2.4',
    '10.2.3',
    '10.2.2',
    '10.2.1',
    '10.2.0',
    '10.1.6',
    '10.1.5',
    '10.1.4',
    '10.1.3',
    '10.1.2',
    '10.1.1',
    '10.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'mitmproxy.org' as const,
}

export type MitmproxyPackage = typeof mitmproxyPackage
