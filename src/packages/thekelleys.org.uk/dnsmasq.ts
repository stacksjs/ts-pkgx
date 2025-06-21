/**
 * **dnsmasq** - Package from pantry: thekelleys.org.uk/dnsmasq
 *
 * @domain `thekelleys.org.uk/dnsmasq`
 *
 * @install `launchpad install thekelleys.org.uk/dnsmasq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.thekelleysorgukdnsmasq
 * console.log(pkg.name)        // "dnsmasq"
 * console.log(pkg.description) // "Package from pantry: thekelleys.org.uk/dnsmasq"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thekelleys-org-uk/dnsmasq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thekelleysorgukdnsmasqPackage = {
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
  description: 'Package from pantry: thekelleys.org.uk/dnsmasq' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install thekelleys.org.uk/dnsmasq' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/thekelleys.org.uk/dnsmasq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ThekelleysorgukdnsmasqPackage = typeof thekelleysorgukdnsmasqPackage
