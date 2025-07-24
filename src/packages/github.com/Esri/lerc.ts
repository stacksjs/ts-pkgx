/**
 * **lerc** - Package from pantry: github.com/Esri/lerc
 *
 * @domain `github.com/Esri/lerc`
 *
 * @install `launchpad install github.com/Esri/lerc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomesrilerc
 * console.log(pkg.name)        // "lerc"
 * console.log(pkg.description) // "Package from pantry: github.com/Esri/lerc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Esri/lerc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomesrilercPackage = {
  /**
   * The display name of this package.
   */
  name: 'lerc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Esri/lerc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Esri/lerc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Esri/lerc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Esri/lerc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Esri/lerc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Esri/lerc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomesrilercPackage = typeof githubcomesrilercPackage
