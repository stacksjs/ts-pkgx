/**
 * **httpie.io** - Package from pantry: httpie.io
 *
 * @domain `httpie.io`
 *
 * @install `launchpad install httpie.io`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.httpieio
 * console.log(pkg.name)        // "httpie.io"
 * console.log(pkg.description) // "Package from pantry: httpie.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/httpie-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const httpieioPackage = {
  /**
   * The display name of this package.
   */
  name: 'httpie.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'httpie.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: httpie.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install httpie.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/httpie.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HttpieioPackage = typeof httpieioPackage
