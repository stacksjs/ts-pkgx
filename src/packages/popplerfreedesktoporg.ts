/**
 * **poppler.freedesktop.org** - Package from pantry: poppler.freedesktop.org
 *
 * @domain `poppler.freedesktop.org`
 *
 * @install `launchpad install poppler.freedesktop.org`
 * @dependencies `boost.org>=1.58.0`, `cairographics.org>=1.16.0`, `curl.se`, ... (+16 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.popplerfreedesktoporg
 * console.log(pkg.name)        // "poppler.freedesktop.org"
 * console.log(pkg.description) // "Package from pantry: poppler.freedesktop.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popplerfreedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'poppler.freedesktop.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'poppler.freedesktop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: poppler.freedesktop.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install poppler.freedesktop.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +poppler.freedesktop.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install poppler.freedesktop.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'boost.org>=1.58.0',
    'cairographics.org>=1.16.0',
    'curl.se',
    'freedesktop.org/fontconfig>=2.13',
    'freetype.org>=2.10',
    'gnome.org/glib>=2.64',
    'gnome.org/libxml2~2.13 # since 25.4.0, 2.14 changed the API version',
    'libjpeg-turbo.org',
    'libpng.org',
    'openjpeg.org',
    'poppler.freedesktop.org/poppler-data',
    'simplesystems.org/libtiff',
    'zlib.net',
    'mozilla.org/nss>=3.68',
    'gnupg.org/gpgme~1.19',
    'gnupg.org/libgpg-error@1',
    'gnupg.org/libassuan@2',
    'littlecms.com^2.9',
    'linux:gnu.org/gcc/libstdcxx^14 # apparently, clang c++20 std isn',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/poppler.freedesktop.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PopplerfreedesktoporgPackage = typeof popplerfreedesktoporgPackage
