/**
 * **libsdl.org** - Simple Directmedia Layer
 *
 * @domain `libsdl.org`
 * @version `3.2.16` (34 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libsdl-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +libsdl.org -- $SHELL -i`
 * @dependencies `linuxx.org/x11x.org/xcursorx.org/xix.org/xrandrx.org/xfixesx.org/xrenderx.org/xscrnsaverx.org/exts`, `x.org/x11`, `x.org/xcursor`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsdlorg
 * console.log(pkg.name)        // "libsdl.org"
 * console.log(pkg.description) // "Simple Directmedia Layer"
 * console.log(pkg.versions[0]) // "3.2.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libsdl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsdlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsdl.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libsdl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simple Directmedia Layer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libsdl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libsdl.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxx.org/x11x.org/xcursorx.org/xix.org/xrandrx.org/xfixesx.org/xrenderx.org/xscrnsaverx.org/exts',
    'x.org/x11',
    'x.org/xcursor',
    'x.org/xi',
    'x.org/xrandr',
    'x.org/xfixes',
    'x.org/xrender',
    'x.org/xscrnsaver',
    'x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.2.16',
    '3.2.14',
    '3.2.12',
    '3.2.10',
    '3.2.8',
    '3.2.6',
    '3.2.4',
    '3.2.2',
    '3.2.0',
    '2.32.8',
    '2.32.6',
    '2.32.4',
    '2.32.2',
    '2.32.0',
    '2.30.12',
    '2.30.11',
    '2.30.10',
    '2.30.9',
    '2.30.8',
    '2.30.7',
    '2.30.6',
    '2.30.5',
    '2.30.4',
    '2.30.3',
    '2.30.2',
    '2.30.1',
    '2.30.0',
    '2.28.5',
    '2.28.4',
    '2.28.3',
    '2.28.2',
    '2.28.1',
    '2.28.0',
    '2.26.5',
  ] as const,
  aliases: [] as const,
  fullPath: 'libsdl.org' as const,
}

export type LibsdlorgPackage = typeof libsdlorgPackage
