/**
 * **git-town.com** - Package from pantry: git-town.com
 *
 * @domain `git-town.com`
 *
 * @install `launchpad install git-town.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gittowncom
 * console.log(pkg.name)        // "git-town.com"
 * console.log(pkg.description) // "Package from pantry: git-town.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-town-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gittowncomPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-town.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-town.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: git-town.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git-town.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +git-town.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git-town.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-town.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GittowncomPackage = typeof gittowncomPackage
