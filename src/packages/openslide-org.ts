/**
 * **openslide** - C library to read whole-slide images (a.k.a. virtual slides)
 *
 * @domain `openslide.org`
 * @programs `openslide-quickhash1sum`, `openslide-show-properties`, `openslide-write-png`
 * @version `4.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +openslide.org -- $SHELL -i`
 * @name `openslide`
 * @dependencies `cairographics.org`, `gnome.org/gdk-pixbuf`, `gnome.org/glib`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.openslide
 * // Or access via domain
 * const samePkg = pantry.openslideorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openslide"
 * console.log(pkg.description) // "C library to read whole-slide images (a.k.a. vi..."
 * console.log(pkg.programs)    // ["openslide-quickhash1sum", "openslide-show-properties", ...]
 * console.log(pkg.versions[0]) // "4.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openslide-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openslidePackage = {
  /**
   * The display name of this package.
   */
  name: 'openslide' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openslide.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C library to read whole-slide images (a.k.a. virtual slides)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openslide.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +openslide.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'openslide-quickhash1sum',
    'openslide-show-properties',
    'openslide-write-png',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cairographics.org',
    'gnome.org/gdk-pixbuf',
    'gnome.org/glib',
    'libjpeg-turbo.org',
    'libpng.org',
    'simplesystems.org/libtiff',
    'gnome.org/libxml2',
    'openjpeg.org',
    'sqlite.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.0',
    '3.4.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'openslide.org' as const,
}

export type OpenslidePackage = typeof openslidePackage
