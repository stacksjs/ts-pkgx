/**
 * **replibyte.com** - Package from pantry: replibyte.com
 *
 * @domain `replibyte.com`
 *
 * @install `launchpad install replibyte.com`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.replibytecom
 * console.log(pkg.name)        // "replibyte.com"
 * console.log(pkg.description) // "Package from pantry: replibyte.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/replibyte-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const replibytecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'replibyte.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'replibyte.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: replibyte.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install replibyte.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/replibyte.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ReplibytecomPackage = typeof replibytecomPackage
