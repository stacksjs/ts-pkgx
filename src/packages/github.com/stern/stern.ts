/**
 * **stern** - Package from pantry: github.com/stern/stern
 *
 * @domain `github.com/stern/stern`
 *
 * @install `launchpad install github.com/stern/stern`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsternstern
 * console.log(pkg.name)        // "stern"
 * console.log(pkg.description) // "Package from pantry: github.com/stern/stern"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/stern/stern.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsternsternPackage = {
  /**
   * The display name of this package.
   */
  name: 'stern' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/stern/stern' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/stern/stern' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/stern/stern' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/stern/stern -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/stern/stern' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/stern/stern/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsternsternPackage = typeof githubcomsternsternPackage
