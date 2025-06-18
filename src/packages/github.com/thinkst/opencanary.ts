/**
 * **opencanaryd** - Modular and decentralised honeypot
 *
 * @domain `github.com/thinkst/opencanary`
 * @programs `opencanaryd`
 * @version `0.9.6` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) opencanaryd`
 * @name `opencanaryd`
 * @aliases `thinkst/opencanary`
 * @dependencies `python.org>=3.10<3.12`, `tcpdump.org`, `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.opencanaryd
 * // Or access via domain
 * const samePkg = pantry.githubcomthinkstopencanary
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "opencanaryd"
 * console.log(pkg.description) // "Modular and decentralised honeypot"
 * console.log(pkg.programs)    // ["opencanaryd"]
 * console.log(pkg.versions[0]) // "0.9.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thinkst/opencanary.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opencanarydPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencanaryd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thinkst/opencanary' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Modular and decentralised honeypot' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thinkst/opencanary/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) opencanaryd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'opencanaryd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.10<3.12',
    'tcpdump.org',
    'openssl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.6',
    '0.9.5',
    '0.9.4',
    '0.9.3',
    '0.9.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'thinkst/opencanary',
  ] as const,
  fullPath: 'github.com/thinkst/opencanary' as const,
}

export type OpencanarydPackage = typeof opencanarydPackage
