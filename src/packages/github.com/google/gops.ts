/**
 * **gops** - Package from pantry: github.com/google/gops
 *
 * @domain `github.com/google/gops`
 *
 * @install `launchpad install github.com/google/gops`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgooglegops
 * console.log(pkg.name)        // "gops"
 * console.log(pkg.description) // "Package from pantry: github.com/google/gops"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/gops.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgooglegopsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gops' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/gops' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/google/gops' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/google/gops' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/google/gops -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/google/gops' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/gops/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgooglegopsPackage = typeof githubcomgooglegopsPackage
