/**
 * **blink** - Package from pantry: github.com/jart/blink
 *
 * @domain `github.com/jart/blink`
 *
 * @install `launchpad install github.com/jart/blink`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjartblink
 * console.log(pkg.name)        // "blink"
 * console.log(pkg.description) // "Package from pantry: github.com/jart/blink"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jart/blink.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjartblinkPackage = {
  /**
   * The display name of this package.
   */
  name: 'blink' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jart/blink' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jart/blink' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jart/blink' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jart/blink -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jart/blink' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jart/blink/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjartblinkPackage = typeof githubcomjartblinkPackage
