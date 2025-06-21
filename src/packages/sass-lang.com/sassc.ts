/**
 * **sassc** - Package from pantry: sass-lang.com/sassc
 *
 * @domain `sass-lang.com/sassc`
 *
 * @install `launchpad install sass-lang.com/sassc`
 * @dependencies `sass-lang.com/libsass^3.6.5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sasslangcomsassc
 * console.log(pkg.name)        // "sassc"
 * console.log(pkg.description) // "Package from pantry: sass-lang.com/sassc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sass-lang-com/sassc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sasslangcomsasscPackage = {
  /**
   * The display name of this package.
   */
  name: 'sassc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sass-lang.com/sassc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sass-lang.com/sassc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sass-lang.com/sassc' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sass-lang.com/libsass^3.6.5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sass-lang.com/sassc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SasslangcomsasscPackage = typeof sasslangcomsasscPackage
