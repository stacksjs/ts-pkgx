/**
 * **spacer** - Package from pantry: github.com/samwho/spacer
 *
 * @domain `github.com/samwho/spacer`
 *
 * @install `launchpad install github.com/samwho/spacer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsamwhospacer
 * console.log(pkg.name)        // "spacer"
 * console.log(pkg.description) // "Package from pantry: github.com/samwho/spacer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/samwho/spacer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsamwhospacerPackage = {
  /**
   * The display name of this package.
   */
  name: 'spacer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/samwho/spacer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/samwho/spacer' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/samwho/spacer' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/samwho/spacer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/samwho/spacer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/samwho/spacer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsamwhospacerPackage = typeof githubcomsamwhospacerPackage
