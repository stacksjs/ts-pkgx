/**
 * **poppler-qt5** - Package from pantry: freedesktop.org/poppler-qt5
 *
 * @domain `freedesktop.org/poppler-qt5`
 *
 * @install `launchpad install freedesktop.org/poppler-qt5`
 * @dependencies `gnupg.org/libassuan^2`, `cairographics.org^1`, `freedesktop.org/fontconfig^2`, ... (+16 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgpopplerqt5
 * console.log(pkg.name)        // "poppler-qt5"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/poppler-qt5"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/poppler-qt5.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgpopplerqt5Package = {
  /**
   * The display name of this package.
   */
  name: 'poppler-qt5' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/poppler-qt5' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/poppler-qt5' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/poppler-qt5' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/poppler-qt5 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/poppler-qt5' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnupg.org/libassuan^2',
    'cairographics.org^1',
    'freedesktop.org/fontconfig^2',
    'freetype.org^2',
    'gnu.org/gettext^0',
    'gnome.org/libxml2~2.13 # since 25.4.0, 2.14 changed the API version',
    'gnome.org/glib^2',
    'gnupg.org/gpgme^1',
    'gnupg.org/libgpg-error^1',
    'libjpeg-turbo.org^2',
    'libpng.org^1',
    'simplesystems.org/libtiff^4',
    'littlecms.com^2',
    'mozilla.org/nss^3',
    'openjpeg.org^2',
    'qt.io~5',
    'curl.se^8',
    'darwin:gnupg.org/libassuan^2',
    'linux:gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/poppler-qt5/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Freedesktoporgpopplerqt5Package = typeof freedesktoporgpopplerqt5Package
