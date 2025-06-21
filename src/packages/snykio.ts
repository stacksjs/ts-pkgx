/**
 * **snyk.io** - Package from pantry: snyk.io
 *
 * @domain `snyk.io`
 *
 * @install `launchpad install snyk.io`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.snykio
 * console.log(pkg.name)        // "snyk.io"
 * console.log(pkg.description) // "Package from pantry: snyk.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/snyk-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const snykioPackage = {
  /**
   * The display name of this package.
   */
  name: 'snyk.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'snyk.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: snyk.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install snyk.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/snyk.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SnykioPackage = typeof snykioPackage
