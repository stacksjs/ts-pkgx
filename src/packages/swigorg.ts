/**
 * **swig.org** - Package from pantry: swig.org
 *
 * @domain `swig.org`
 *
 * @install `launchpad install swig.org`
 * @dependencies `pcre.org/v2`, `ruby-lang.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.swigorg
 * console.log(pkg.name)        // "swig.org"
 * console.log(pkg.description) // "Package from pantry: swig.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swig-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swigorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'swig.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'swig.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: swig.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install swig.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org/v2',
    'ruby-lang.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/swig.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SwigorgPackage = typeof swigorgPackage
