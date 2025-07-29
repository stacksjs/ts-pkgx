/**
 * **yabai** - Package from pantry: github.com/koekeishiya/yabai
 *
 * @domain `github.com/koekeishiya/yabai`
 *
 * @install `launchpad install github.com/koekeishiya/yabai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkoekeishiyayabai
 * console.log(pkg.name)        // "yabai"
 * console.log(pkg.description) // "Package from pantry: github.com/koekeishiya/yabai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/koekeishiya/yabai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkoekeishiyayabaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'yabai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/koekeishiya/yabai' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/koekeishiya/yabai' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/koekeishiya/yabai' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/koekeishiya/yabai -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/koekeishiya/yabai' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/koekeishiya/yabai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkoekeishiyayabaiPackage = typeof githubcomkoekeishiyayabaiPackage
