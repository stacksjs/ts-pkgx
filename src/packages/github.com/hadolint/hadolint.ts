/**
 * **hadolint** - Package from pantry: github.com/hadolint/hadolint
 *
 * @domain `github.com/hadolint/hadolint`
 *
 * @install `launchpad install github.com/hadolint/hadolint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomhadolinthadolint
 * console.log(pkg.name)        // "hadolint"
 * console.log(pkg.description) // "Package from pantry: github.com/hadolint/hadolint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hadolint/hadolint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomhadolinthadolintPackage = {
  /**
   * The display name of this package.
   */
  name: 'hadolint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hadolint/hadolint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/hadolint/hadolint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/hadolint/hadolint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/hadolint/hadolint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/hadolint/hadolint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hadolint/hadolint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomhadolinthadolintPackage = typeof githubcomhadolinthadolintPackage
