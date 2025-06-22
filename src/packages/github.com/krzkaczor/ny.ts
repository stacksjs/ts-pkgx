/**
 * **ny** - Package from pantry: github.com/krzkaczor/ny
 *
 * @domain `github.com/krzkaczor/ny`
 *
 * @install `launchpad install github.com/krzkaczor/ny`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkrzkaczorny
 * console.log(pkg.name)        // "ny"
 * console.log(pkg.description) // "Package from pantry: github.com/krzkaczor/ny"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/krzkaczor/ny.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkrzkaczornyPackage = {
  /**
   * The display name of this package.
   */
  name: 'ny' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/krzkaczor/ny' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/krzkaczor/ny' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/krzkaczor/ny' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/krzkaczor/ny -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/krzkaczor/ny' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/krzkaczor/ny/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkrzkaczornyPackage = typeof githubcomkrzkaczornyPackage
