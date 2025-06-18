/**
 * **taglib.org** - Package from pantry: taglib.org
 *
 * @domain `taglib.org`
 *
 * @install `launchpad install taglib.org`
 * @dependencies `zlib.net^1`, `github.com/nemtrif/utfcpp^4`, `cmake.org`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tagliborg
 * console.log(pkg.name)        // "taglib.org"
 * console.log(pkg.description) // "Package from pantry: taglib.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taglib-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tagliborgPackage = {
  /**
   * The display name of this package.
   */
  name: 'taglib.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taglib.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: taglib.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install taglib.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'github.com/nemtrif/utfcpp^4',
    'cmake.org',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taglib.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TagliborgPackage = typeof tagliborgPackage
