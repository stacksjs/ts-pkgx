/**
 * **openslide.org** - Package from pantry: openslide.org
 *
 * @domain `openslide.org`
 *
 * @install `launchpad install openslide.org`
 * @dependencies `cairographics.org`, `gnome.org/gdk-pixbuf`, `gnome.org/glib`, ... (+8 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openslideorg
 * console.log(pkg.name)        // "openslide.org"
 * console.log(pkg.description) // "Package from pantry: openslide.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openslide-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openslideorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openslide.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openslide.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openslide.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openslide.org' as const,
  programs: [] as const,
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
    'freedesktop.org/pkg-config',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openslide.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenslideorgPackage = typeof openslideorgPackage
