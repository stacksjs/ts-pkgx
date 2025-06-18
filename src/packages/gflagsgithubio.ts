/**
 * **gflags.github.io** - Package from pantry: gflags.github.io
 *
 * @domain `gflags.github.io`
 *
 * @install `launchpad install gflags.github.io`
 * @dependencies `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gflagsgithubio
 * console.log(pkg.name)        // "gflags.github.io"
 * console.log(pkg.description) // "Package from pantry: gflags.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gflags-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gflagsgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gflags.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gflags.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gflags.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gflags.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gflags.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GflagsgithubioPackage = typeof gflagsgithubioPackage
