/**
 * **grype** - Package from pantry: github.com/anchore/grype
 *
 * @domain `github.com/anchore/grype`
 *
 * @install `launchpad install github.com/anchore/grype`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomanchoregrype
 * console.log(pkg.name)        // "grype"
 * console.log(pkg.description) // "Package from pantry: github.com/anchore/grype"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/anchore/grype.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomanchoregrypePackage = {
  /**
   * The display name of this package.
   */
  name: 'grype' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/anchore/grype' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/anchore/grype' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/anchore/grype' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/anchore/grype -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/anchore/grype' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/anchore/grype/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomanchoregrypePackage = typeof githubcomanchoregrypePackage
