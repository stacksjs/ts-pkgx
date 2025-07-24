/**
 * **direnv.net** - Package from pantry: direnv.net
 *
 * @domain `direnv.net`
 *
 * @install `launchpad install direnv.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.direnvnet
 * console.log(pkg.name)        // "direnv.net"
 * console.log(pkg.description) // "Package from pantry: direnv.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/direnv-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const direnvnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'direnv.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'direnv.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: direnv.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install direnv.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +direnv.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install direnv.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/direnv.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DirenvnetPackage = typeof direnvnetPackage
