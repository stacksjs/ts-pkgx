/**
 * **sass-lang.com/libsass** - A C/C++ implementation of a Sass compiler
 *
 * @domain `sass-lang.com/libsass`
 * @version `3.6.6` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sass-lang.com/libsass`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sasslangcomlibsass
 * console.log(pkg.name)        // "sass-lang.com/libsass"
 * console.log(pkg.description) // "A C/C++ implementation of a Sass compiler"
 * console.log(pkg.versions[0]) // "3.6.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sass-lang-com/libsass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sasslangcomlibsassPackage = {
  /**
   * The display name of this package.
   */
  name: 'sass-lang.com/libsass' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sass-lang.com/libsass' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A C/C++ implementation of a Sass compiler' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sass-lang.com/libsass/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sass-lang.com/libsass' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.6',
    '3.6.5',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sass-lang.com/libsass -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sass-lang.com/libsass' as const,
}

export type SasslangcomlibsassPackage = typeof sasslangcomlibsassPackage
