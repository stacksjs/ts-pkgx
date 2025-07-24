/**
 * **aspell.net** - Package from pantry: aspell.net
 *
 * @domain `aspell.net`
 *
 * @install `launchpad install aspell.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aspellnet
 * console.log(pkg.name)        // "aspell.net"
 * console.log(pkg.description) // "Package from pantry: aspell.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aspell-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aspellnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'aspell.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aspell.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aspell.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aspell.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aspell.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aspell.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aspell.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AspellnetPackage = typeof aspellnetPackage
