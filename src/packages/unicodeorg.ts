/**
 * **unicode.org** - Package from pantry: unicode.org
 *
 * @domain `unicode.org`
 *
 * @install `launchpad install unicode.org`
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.unicodeorg
 * console.log(pkg.name)        // "unicode.org"
 * console.log(pkg.description) // "Package from pantry: unicode.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unicode-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unicodeorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'unicode.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'unicode.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: unicode.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install unicode.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unicode.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type UnicodeorgPackage = typeof unicodeorgPackage
