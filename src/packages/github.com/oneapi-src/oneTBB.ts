/**
 * **oneTBB** - Package from pantry: github.com/oneapi-src/oneTBB
 *
 * @domain `github.com/oneapi-src/oneTBB`
 *
 * @install `launchpad install github.com/oneapi-src/oneTBB`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomoneapisrconetbb
 * console.log(pkg.name)        // "oneTBB"
 * console.log(pkg.description) // "Package from pantry: github.com/oneapi-src/oneTBB"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oneapi-src/oneTBB.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoneapisrconetbbPackage = {
  /**
   * The display name of this package.
   */
  name: 'oneTBB' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oneapi-src/oneTBB' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/oneapi-src/oneTBB' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/oneapi-src/oneTBB' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/oneapi-src/oneTBB -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/oneapi-src/oneTBB' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oneapi-src/oneTBB/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomoneapisrconetbbPackage = typeof githubcomoneapisrconetbbPackage
