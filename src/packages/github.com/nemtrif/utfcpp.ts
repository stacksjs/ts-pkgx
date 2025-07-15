/**
 * **utfcpp** - Package from pantry: github.com/nemtrif/utfcpp
 *
 * @domain `github.com/nemtrif/utfcpp`
 *
 * @install `launchpad install github.com/nemtrif/utfcpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnemtrifutfcpp
 * console.log(pkg.name)        // "utfcpp"
 * console.log(pkg.description) // "Package from pantry: github.com/nemtrif/utfcpp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nemtrif/utfcpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnemtrifutfcppPackage = {
  /**
   * The display name of this package.
   */
  name: 'utfcpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nemtrif/utfcpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/nemtrif/utfcpp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/nemtrif/utfcpp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nemtrif/utfcpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/nemtrif/utfcpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nemtrif/utfcpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnemtrifutfcppPackage = typeof githubcomnemtrifutfcppPackage
