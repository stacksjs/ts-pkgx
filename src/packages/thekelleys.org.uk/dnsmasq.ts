/**
 * **dnsmasq** - pkgx package
 *
 * @domain `thekelleys.org.uk/dnsmasq`
 * @programs `dnsmasq`
 * @version `2.91.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dnsmasq`
 * @name `dnsmasq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dnsmasq
 * // Or access via domain
 * const samePkg = pantry.thekelleysorgukdnsmasq
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dnsmasq"
 * console.log(pkg.programs)    // ["dnsmasq"]
 * console.log(pkg.versions[0]) // "2.91.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thekelleys-org-uk/dnsmasq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dnsmasqPackage = {
  /**
   * The display name of this package.
   */
  name: 'dnsmasq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thekelleys.org.uk/dnsmasq' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/thekelleys.org.uk/dnsmasq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dnsmasq' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dnsmasq',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.91.0',
    '2.90.0',
    '2.89.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) dnsmasq -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dnsmasq' as const,
}

export type DnsmasqPackage = typeof dnsmasqPackage
