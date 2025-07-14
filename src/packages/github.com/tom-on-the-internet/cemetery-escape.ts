/**
 * **cemetery-escape** - Package from pantry: github.com/tom-on-the-internet/cemetery-escape
 *
 * @domain `github.com/tom-on-the-internet/cemetery-escape`
 *
 * @install `launchpad install github.com/tom-on-the-internet/cemetery-escape`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtomontheinternetcemeteryescape
 * console.log(pkg.name)        // "cemetery-escape"
 * console.log(pkg.description) // "Package from pantry: github.com/tom-on-the-inte..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tom-on-the-internet/cemetery-escape.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtomontheinternetcemeteryescapePackage = {
  /**
   * The display name of this package.
   */
  name: 'cemetery-escape' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tom-on-the-internet/cemetery-escape' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/tom-on-the-internet/cemetery-escape' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/tom-on-the-internet/cemetery-escape' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/tom-on-the-internet/cemetery-escape -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/tom-on-the-internet/cemetery-escape' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tom-on-the-internet/cemetery-escape/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomtomontheinternetcemeteryescapePackage = typeof githubcomtomontheinternetcemeteryescapePackage
