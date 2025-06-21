/**
 * **raccoin.org** - Package from pantry: raccoin.org
 *
 * @domain `raccoin.org`
 *
 * @install `launchpad install raccoin.org`
 * @dependencies `gnu.org/libiconv^1`, `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.raccoinorg
 * console.log(pkg.name)        // "raccoin.org"
 * console.log(pkg.description) // "Package from pantry: raccoin.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/raccoin-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const raccoinorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'raccoin.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'raccoin.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: raccoin.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install raccoin.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libiconv^1',
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/raccoin.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RaccoinorgPackage = typeof raccoinorgPackage
