/**
 * **libyang** - YANG data modeling language library
 *
 * @domain `github.com/cesnet/libyang`
 * @programs `yanglint`, `yangre`
 * @version `3.12.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/cesnet/libyang -- $SHELL -i`
 * @name `libyang`
 * @dependencies `pcre.org/v2>=10.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libyang
 * // Or access via domain
 * const samePkg = pantry.githubcomcesnetlibyang
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libyang"
 * console.log(pkg.description) // "YANG data modeling language library"
 * console.log(pkg.programs)    // ["yanglint", "yangre"]
 * console.log(pkg.versions[0]) // "3.12.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cesnet/libyang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libyangPackage = {
  /**
   * The display name of this package.
   */
  name: 'libyang' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cesnet/libyang' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'YANG data modeling language library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cesnet/libyang/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/cesnet/libyang -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yanglint',
    'yangre',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org/v2>=10.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.12.2',
    '3.7.8',
    '3.4.2',
    '3.1.0',
    '2.1.148',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LibyangPackage = typeof libyangPackage
