/**
 * **emacs** - Package from pantry: gnu.org/emacs
 *
 * @domain `gnu.org/emacs`
 *
 * @install `launchpad install gnu.org/emacs`
 * @dependencies `gnome.org/libxml2^2.10.3`, `invisible-island.net/ncurses^6.3.0`, `libjpeg-turbo.org^2.1.5.1`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgemacs
 * console.log(pkg.name)        // "emacs"
 * console.log(pkg.description) // "Package from pantry: gnu.org/emacs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/emacs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgemacsPackage = {
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
  description: 'Package from pantry: gnu.org/emacs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/emacs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/emacs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/emacs' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/emacs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgemacsPackage = typeof gnuorgemacsPackage
