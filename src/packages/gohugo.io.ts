/**
 * **hugo** - The world’s fastest framework for building websites.
 *
 * @domain `gohugo.io`
 * @programs `hugo`
 * @version `0.147.7` (122 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/gohugo-io.md
 *
 * @install `sh <(curl https://pkgx.sh) hugo`
 * @aliases `hugo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.hugo
 * // Or access via domain
 * const samePkg = pantry.gohugoio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hugo"
 * console.log(pkg.description) // "The world’s fastest framework for building webs..."
 * console.log(pkg.programs)    // ["hugo"]
 * console.log(pkg.versions[0]) // "0.147.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gohugo-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hugoPackage = {
  /**
   * The display name of this package.
   */
  name: 'hugo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gohugo.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The world’s fastest framework for building websites.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gohugo.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) hugo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hugo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.147.7',
    '0.147.6',
    '0.147.5',
    '0.147.4',
    '0.147.3',
    '0.147.2',
    '0.147.1',
    '0.147.0',
    '0.146.7',
    '0.146.6',
    '0.146.5',
    '0.146.4',
    '0.146.3',
    '0.146.2',
    '0.146.1',
    '0.146.0',
    '0.145.0',
    '0.144.2',
    '0.144.1',
    '0.144.0',
    '0.143.1',
    '0.143.0',
    '0.142.0',
    '0.141.0',
    '0.140.2',
    '0.140.1',
    '0.140.0',
    '0.139.5',
    '0.139.4',
    '0.139.3',
    '0.139.2',
    '0.139.1',
    '0.139.0',
    '0.138.0',
    '0.137.1',
    '0.137.0',
    '0.136.5',
    '0.136.4',
    '0.136.3',
    '0.136.2',
    '0.136.1',
    '0.136.0',
    '0.135.0',
    '0.134.3',
    '0.134.2',
    '0.134.1',
    '0.134.0',
    '0.133.1',
    '0.133.0',
    '0.132.2',
    '0.132.1',
    '0.132.0',
    '0.131.0',
    '0.130.0',
    '0.129.0',
    '0.128.2',
    '0.128.1',
    '0.128.0',
    '0.127.0',
    '0.126.3',
    '0.126.2',
    '0.126.1',
    '0.126.0',
    '0.125.7',
    '0.125.6',
    '0.125.5',
    '0.125.4',
    '0.125.3',
    '0.125.2',
    '0.125.1',
    '0.125.0',
    '0.124.1',
    '0.124.0',
    '0.123.8',
    '0.123.7',
    '0.123.6',
    '0.123.5',
    '0.123.4',
    '0.123.3',
    '0.123.2',
    '0.123.1',
    '0.123.0',
    '0.122.0',
    '0.121.2',
    '0.121.1',
    '0.121.0',
    '0.120.4',
    '0.120.3',
    '0.120.2',
    '0.120.1',
    '0.120.0',
    '0.119.0',
    '0.118.2',
    '0.118.1',
    '0.118.0',
    '0.116.1',
    '0.116.0',
    '0.115.4',
    '0.115.3',
    '0.115.2',
    '0.115.1',
    '0.115.0',
    '0.114.1',
    '0.114.0',
    '0.113.0',
    '0.112.7',
    '0.112.6',
    '0.112.5',
    '0.112.4',
    '0.112.3',
    '0.112.2',
    '0.112.1',
    '0.112.0',
    '0.111.3',
    '0.111.2',
    '0.111.1',
    '0.111.0',
    '0.109.0',
    '0.108.0',
    '0.107.0',
    '0.105.0',
    '0.104.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'hugo',
  ] as const,
  fullPath: 'gohugo.io' as const,
}

export type HugoPackage = typeof hugoPackage
