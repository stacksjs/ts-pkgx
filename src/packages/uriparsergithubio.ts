/**
 * **uriparser.github.io** - Package from pantry: uriparser.github.io
 *
 * @domain `uriparser.github.io`
 *
 * @install `launchpad install uriparser.github.io`
 * @dependencies `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.uriparsergithubio
 * console.log(pkg.name)        // "uriparser.github.io"
 * console.log(pkg.description) // "Package from pantry: uriparser.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/uriparser-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const uriparsergithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'uriparser.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'uriparser.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: uriparser.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install uriparser.github.io' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/uriparser.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type UriparsergithubioPackage = typeof uriparsergithubioPackage
