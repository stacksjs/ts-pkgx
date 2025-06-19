/**
 * **coredns** - CoreDNS is a DNS server that chains plugins
 *
 * @domain `coredns.io`
 * @programs `coredns`
 * @version `1.12.2` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install coredns`
 * @aliases `coredns`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.coredns
 * // Or access via domain
 * const samePkg = pantry.corednsio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "coredns.io"
 * console.log(pkg.description) // "CoreDNS is a DNS server that chains plugins"
 * console.log(pkg.programs)    // ["coredns"]
 * console.log(pkg.versions[0]) // "1.12.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coredns-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const corednsPackage = {
  /**
   * The display name of this package.
   */
  name: 'coredns.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'coredns.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CoreDNS is a DNS server that chains plugins' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/coredns.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install coredns' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'coredns',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.4',
    '1.11.3',
    '1.11.2',
    '1.11.1',
    '1.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'coredns',
  ] as const,
}

export type CorednsPackage = typeof corednsPackage
