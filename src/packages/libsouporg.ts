/**
 * **libsoup.org** - Package from pantry: libsoup.org
 *
 * @domain `libsoup.org`
 *
 * @install `launchpad install libsoup.org`
 * @dependencies `gnome.org/glib-networking`, `gnutls.org`, `rockdaboot.github.io/libpsl`, ... (+14 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsouporg
 * console.log(pkg.name)        // "libsoup.org"
 * console.log(pkg.description) // "Package from pantry: libsoup.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libsoup-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsouporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsoup.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libsoup.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libsoup.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libsoup.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib-networking',
    'gnutls.org',
    'rockdaboot.github.io/libpsl',
    'kerberos.org',
    'gnome.org/libxml2',
    'sqlite.org',
    'nghttp2.org',
    'gnu.org/gettext',
    'gnome.org/glib',
    'github.com/google/brotli',
    'gnome.org/gobject-introspection',
    'mesonbuild.com',
    'ninja-build.org',
    'freedesktop.org/pkg-config',
    'python.org~3.11',
    'gnome.org/vala',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libsoup.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibsouporgPackage = typeof libsouporgPackage
