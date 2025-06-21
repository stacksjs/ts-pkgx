/**
 * **tcpdump.org** - Package from pantry: tcpdump.org
 *
 * @domain `tcpdump.org`
 *
 * @install `launchpad install tcpdump.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcpdumporg
 * console.log(pkg.name)        // "tcpdump.org"
 * console.log(pkg.description) // "Package from pantry: tcpdump.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcpdump-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcpdumporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tcpdump.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcpdump.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tcpdump.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tcpdump.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcpdump.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TcpdumporgPackage = typeof tcpdumporgPackage
