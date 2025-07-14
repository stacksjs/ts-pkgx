/**
 * **redfishtool** - Package from pantry: github.com/DMTF/redfishtool
 *
 * @domain `github.com/DMTF/redfishtool`
 *
 * @install `launchpad install github.com/DMTF/redfishtool`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdmtfredfishtool
 * console.log(pkg.name)        // "redfishtool"
 * console.log(pkg.description) // "Package from pantry: github.com/DMTF/redfishtool"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DMTF/redfishtool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdmtfredfishtoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'redfishtool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DMTF/redfishtool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/DMTF/redfishtool' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/DMTF/redfishtool' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/DMTF/redfishtool -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/DMTF/redfishtool' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/DMTF/redfishtool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdmtfredfishtoolPackage = typeof githubcomdmtfredfishtoolPackage
