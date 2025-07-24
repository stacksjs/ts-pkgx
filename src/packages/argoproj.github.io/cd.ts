/**
 * **cd** - Package from pantry: argoproj.github.io/cd
 *
 * @domain `argoproj.github.io/cd`
 *
 * @install `launchpad install argoproj.github.io/cd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.argoprojgithubiocd
 * console.log(pkg.name)        // "cd"
 * console.log(pkg.description) // "Package from pantry: argoproj.github.io/cd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/argoproj-github-io/cd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argoprojgithubiocdPackage = {
  /**
   * The display name of this package.
   */
  name: 'cd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'argoproj.github.io/cd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: argoproj.github.io/cd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install argoproj.github.io/cd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +argoproj.github.io/cd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install argoproj.github.io/cd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/argoproj.github.io/cd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ArgoprojgithubiocdPackage = typeof argoprojgithubiocdPackage
