/**
 * **emacs** - GNU Emacs text editor
 *
 * @domain `gnu.org/emacs`
 * @programs `emacs`
 * @version `30.1.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) emacs`
 * @name `emacs`
 * @dependencies `gnome.org/libxml2^2.10.3`, `invisible-island.net/ncurses^6.3.0`, `libjpeg-turbo.org^2.1.5.1`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.emacs
 * // Or access via domain
 * const samePkg = pantry.gnuorgemacs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "emacs"
 * console.log(pkg.description) // "GNU Emacs text editor"
 * console.log(pkg.programs)    // ["emacs"]
 * console.log(pkg.versions[0]) // "30.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/emacs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const emacsPackage = {
  /**
   * The display name of this package.
   */
  name: 'emacs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/emacs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GNU Emacs text editor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/emacs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) emacs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'emacs',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2^2.10.3',
    'invisible-island.net/ncurses^6.3.0',
    'libjpeg-turbo.org^2.1.5.1',
    'gnu.org/sed^4.9.0',
    'gnu.org/texinfo^7.0.1',
    'gnu.org/libidn2^2.3',
    'gnutls.org^3.6',
    'zlib.net^1.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '30.1.0',
    '29.4.0',
    '29.3.0',
    '29.2.0',
    '29.1.0',
    '28.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gnu.org/emacs' as const,
}

export type EmacsPackage = typeof emacsPackage
