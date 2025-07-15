/**
 * **lolcat** - Package from pantry: github.com/jaseg/lolcat
 *
 * @domain `github.com/jaseg/lolcat`
 *
 * @install `launchpad install github.com/jaseg/lolcat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjaseglolcat
 * console.log(pkg.name)        // "lolcat"
 * console.log(pkg.description) // "Package from pantry: github.com/jaseg/lolcat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jaseg/lolcat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjaseglolcatPackage = {
  /**
   * The display name of this package.
   */
  name: 'lolcat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jaseg/lolcat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jaseg/lolcat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jaseg/lolcat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jaseg/lolcat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jaseg/lolcat' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jaseg/lolcat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjaseglolcatPackage = typeof githubcomjaseglolcatPackage
