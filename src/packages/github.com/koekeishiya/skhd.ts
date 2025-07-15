/**
 * **skhd** - Package from pantry: github.com/koekeishiya/skhd
 *
 * @domain `github.com/koekeishiya/skhd`
 *
 * @install `launchpad install github.com/koekeishiya/skhd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkoekeishiyaskhd
 * console.log(pkg.name)        // "skhd"
 * console.log(pkg.description) // "Package from pantry: github.com/koekeishiya/skhd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/koekeishiya/skhd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkoekeishiyaskhdPackage = {
  /**
   * The display name of this package.
   */
  name: 'skhd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/koekeishiya/skhd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/koekeishiya/skhd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/koekeishiya/skhd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/koekeishiya/skhd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/koekeishiya/skhd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/koekeishiya/skhd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkoekeishiyaskhdPackage = typeof githubcomkoekeishiyaskhdPackage
