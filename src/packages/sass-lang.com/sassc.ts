/**
 * **sassc** - Wrapper around libsass that helps to create command-line apps
 *
 * @domain `sass-lang.com/sassc`
 * @programs `sassc`
 * @version `3.6.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sassc`
 * @name `sassc`
 * @dependencies `sass-lang.com/libsass^3.6.5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sassc
 * // Or access via domain
 * const samePkg = pantry.sasslangcomsassc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sassc"
 * console.log(pkg.description) // "Wrapper around libsass that helps to create com..."
 * console.log(pkg.programs)    // ["sassc"]
 * console.log(pkg.versions[0]) // "3.6.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sass-lang-com/sassc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sasscPackage = {
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
  description: 'Wrapper around libsass that helps to create command-line apps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sass-lang.com/sassc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sassc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sassc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sass-lang.com/libsass^3.6.5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type SasscPackage = typeof sasscPackage
