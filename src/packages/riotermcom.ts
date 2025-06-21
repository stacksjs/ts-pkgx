/**
 * **rioterm.com** - Package from pantry: rioterm.com
 *
 * @domain `rioterm.com`
 *
 * @install `launchpad install rioterm.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.riotermcom
 * console.log(pkg.name)        // "rioterm.com"
 * console.log(pkg.description) // "Package from pantry: rioterm.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rioterm-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const riotermcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'rioterm.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rioterm.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rioterm.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rioterm.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rioterm.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RiotermcomPackage = typeof riotermcomPackage
