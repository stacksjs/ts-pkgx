/**
 * **Sourcery** - Package from pantry: github.com/krzysztofzablocki/Sourcery
 *
 * @domain `github.com/krzysztofzablocki/Sourcery`
 *
 * @install `launchpad install github.com/krzysztofzablocki/Sourcery`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkrzysztofzablockisourcery
 * console.log(pkg.name)        // "Sourcery"
 * console.log(pkg.description) // "Package from pantry: github.com/krzysztofzabloc..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/krzysztofzablocki/Sourcery.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkrzysztofzablockisourceryPackage = {
  /**
   * The display name of this package.
   */
  name: 'Sourcery' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/krzysztofzablocki/Sourcery' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/krzysztofzablocki/Sourcery' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/krzysztofzablocki/Sourcery' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/krzysztofzablocki/Sourcery -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/krzysztofzablocki/Sourcery' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/krzysztofzablocki/Sourcery/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkrzysztofzablockisourceryPackage = typeof githubcomkrzysztofzablockisourceryPackage
