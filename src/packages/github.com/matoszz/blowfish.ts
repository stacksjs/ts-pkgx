/**
 * **blowfish** - Package from pantry: github.com/matoszz/blowfish
 *
 * @domain `github.com/matoszz/blowfish`
 *
 * @install `launchpad install github.com/matoszz/blowfish`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommatoszzblowfish
 * console.log(pkg.name)        // "blowfish"
 * console.log(pkg.description) // "Package from pantry: github.com/matoszz/blowfish"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/matoszz/blowfish.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommatoszzblowfishPackage = {
  /**
   * The display name of this package.
   */
  name: 'blowfish' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/matoszz/blowfish' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/matoszz/blowfish' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/matoszz/blowfish' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/matoszz/blowfish -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/matoszz/blowfish' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/matoszz/blowfish/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommatoszzblowfishPackage = typeof githubcommatoszzblowfishPackage
