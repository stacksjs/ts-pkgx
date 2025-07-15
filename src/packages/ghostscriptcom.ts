/**
 * **ghostscript.com** - Package from pantry: ghostscript.com
 *
 * @domain `ghostscript.com`
 *
 * @install `launchpad install ghostscript.com`
 * @dependencies `zlib.net^1.2`, `libpng.org^1.6`, `libjpeg-turbo.org^2`, ... (+8 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ghostscriptcom
 * console.log(pkg.name)        // "ghostscript.com"
 * console.log(pkg.description) // "Package from pantry: ghostscript.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ghostscript-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ghostscriptcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ghostscript.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ghostscript.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ghostscript.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ghostscript.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ghostscript.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ghostscript.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1.2',
    'libpng.org^1.6',
    'libjpeg-turbo.org^2',
    'simplesystems.org/libtiff^4',
    'littlecms.com^2.15',
    'gnu.org/libidn^1.41',
    'freedesktop.org/fontconfig^2.14',
    'jbig2dec.com^0.19',
    'libexpat.github.io^2.5',
    'openjpeg.org^2.5',
    'freetype.org^2.13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ghostscript.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GhostscriptcomPackage = typeof ghostscriptcomPackage
