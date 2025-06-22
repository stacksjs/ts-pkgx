/**
 * **triangle** - Package from pantry: github.com/esimov/triangle
 *
 * @domain `github.com/esimov/triangle`
 *
 * @install `launchpad install github.com/esimov/triangle`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomesimovtriangle
 * console.log(pkg.name)        // "triangle"
 * console.log(pkg.description) // "Package from pantry: github.com/esimov/triangle"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/esimov/triangle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomesimovtrianglePackage = {
  /**
   * The display name of this package.
   */
  name: 'triangle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/esimov/triangle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/esimov/triangle' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/esimov/triangle' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/esimov/triangle -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/esimov/triangle' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/esimov/triangle/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomesimovtrianglePackage = typeof githubcomesimovtrianglePackage
