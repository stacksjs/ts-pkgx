/**
 * **xslt** - Read-only mirror of https://gitlab.gnome.org/GNOME/libxslt
 *
 * @domain `gnome.org/libxslt`
 * @programs `xslt-config`, `xsltproc`
 * @version `1.1.43` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/libxslt -- $SHELL -i`
 * @name `xslt`
 * @aliases `libxslt`
 * @dependencies `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xslt
 * // Or access via domain
 * const samePkg = pantry.gnomeorglibxslt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xslt"
 * console.log(pkg.description) // "Read-only mirror of https://gitlab.gnome.org/GN..."
 * console.log(pkg.programs)    // ["xslt-config", "xsltproc"]
 * console.log(pkg.versions[0]) // "1.1.43" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/libxslt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xsltPackage = {
  /**
   * The display name of this package.
   */
  name: 'xslt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/libxslt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Read-only mirror of https://gitlab.gnome.org/GNOME/libxslt' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libxslt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/libxslt -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xslt-config',
    'xsltproc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.43',
    '1.1.42',
    '1.1.41',
    '1.1.40',
    '1.1.39',
    '1.1.38',
    '1.1.37',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libxslt',
  ] as const,
  fullPath: 'gnome.org/libxslt' as const,
}

export type XsltPackage = typeof xsltPackage
