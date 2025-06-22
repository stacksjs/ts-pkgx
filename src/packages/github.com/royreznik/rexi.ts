/**
 * **rexi** - Package from pantry: github.com/royreznik/rexi
 *
 * @domain `github.com/royreznik/rexi`
 *
 * @install `launchpad install github.com/royreznik/rexi`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomroyreznikrexi
 * console.log(pkg.name)        // "rexi"
 * console.log(pkg.description) // "Package from pantry: github.com/royreznik/rexi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/royreznik/rexi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomroyreznikrexiPackage = {
  /**
   * The display name of this package.
   */
  name: 'rexi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/royreznik/rexi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/royreznik/rexi' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/royreznik/rexi' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/royreznik/rexi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/royreznik/rexi' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/royreznik/rexi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomroyreznikrexiPackage = typeof githubcomroyreznikrexiPackage
