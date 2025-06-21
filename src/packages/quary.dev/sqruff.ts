/**
 * **sqruff** - Package from pantry: quary.dev/sqruff
 *
 * @domain `quary.dev/sqruff`
 *
 * @install `launchpad install quary.dev/sqruff`
 * @dependencies `linux:jemalloc.net@5` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.quarydevsqruff
 * console.log(pkg.name)        // "sqruff"
 * console.log(pkg.description) // "Package from pantry: quary.dev/sqruff"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/quary-dev/sqruff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const quarydevsqruffPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqruff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'quary.dev/sqruff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: quary.dev/sqruff' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install quary.dev/sqruff' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:jemalloc.net@5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/quary.dev/sqruff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type QuarydevsqruffPackage = typeof quarydevsqruffPackage
