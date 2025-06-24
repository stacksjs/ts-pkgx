/**
 * **Carthage** - Package from pantry: github.com/Carthage/Carthage
 *
 * @domain `github.com/Carthage/Carthage`
 *
 * @install `launchpad install github.com/Carthage/Carthage`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcarthagecarthage
 * console.log(pkg.name)        // "Carthage"
 * console.log(pkg.description) // "Package from pantry: github.com/Carthage/Carthage"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Carthage/Carthage.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcarthagecarthagePackage = {
  /**
   * The display name of this package.
   */
  name: 'Carthage' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Carthage/Carthage' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Carthage/Carthage' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Carthage/Carthage' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Carthage/Carthage -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Carthage/Carthage' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Carthage/Carthage/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcarthagecarthagePackage = typeof githubcomcarthagecarthagePackage
