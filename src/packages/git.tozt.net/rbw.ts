/**
 * **rbw** - Package from pantry: git.tozt.net/rbw
 *
 * @domain `git.tozt.net/rbw`
 *
 * @install `launchpad install git.tozt.net/rbw`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gittoztnetrbw
 * console.log(pkg.name)        // "rbw"
 * console.log(pkg.description) // "Package from pantry: git.tozt.net/rbw"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-tozt-net/rbw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gittoztnetrbwPackage = {
  /**
   * The display name of this package.
   */
  name: 'rbw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git.tozt.net/rbw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: git.tozt.net/rbw' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git.tozt.net/rbw' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +git.tozt.net/rbw -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git.tozt.net/rbw' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git.tozt.net/rbw/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GittoztnetrbwPackage = typeof gittoztnetrbwPackage
