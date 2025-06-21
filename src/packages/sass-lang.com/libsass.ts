/**
 * **libsass** - Package from pantry: sass-lang.com/libsass
 *
 * @domain `sass-lang.com/libsass`
 *
 * @install `launchpad install sass-lang.com/libsass`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sasslangcomlibsass
 * console.log(pkg.name)        // "libsass"
 * console.log(pkg.description) // "Package from pantry: sass-lang.com/libsass"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sass-lang-com/libsass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sasslangcomlibsassPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsass' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sass-lang.com/libsass' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sass-lang.com/libsass' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sass-lang.com/libsass' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sass-lang.com/libsass/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SasslangcomlibsassPackage = typeof sasslangcomlibsassPackage
