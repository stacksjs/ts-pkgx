/**
 * **+freeglut.sourceforge.io -- $SHELL -i** - Free implementation of the OpenGL Utility Toolkit (GLUT)
 *
 * @domain `freeglut.sourceforge.io`
 * @version `3.6.0` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/freeglut-sourceforge-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +freeglut.sourceforge.io -- $SHELL -i`
 * @aliases `+freeglut.sourceforge.io -- $SHELL -i`
 * @dependencies `x.org/x11`, `x.org/xi`, `x.org/xrandr`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freeglutsourceforgeioSHELLi
 * // Or access via domain
 * const samePkg = pantry.freeglutsourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freeglut.sourceforge.io"
 * console.log(pkg.description) // "Free implementation of the OpenGL Utility Toolk..."
 * console.log(pkg.versions[0]) // "3.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freeglut-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freeglutsourceforgeioSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'freeglut.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freeglut.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Free implementation of the OpenGL Utility Toolkit (GLUT)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freeglut.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freeglut.sourceforge.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/xi',
    'x.org/xrandr',
    'x.org/xxf86vm',
    'mesa3d.org',
    'linuxfreedesktop.org/mesa-glux.org/xinput',
    'freedesktop.org/mesa-glu',
    'x.org/xinput',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.0',
    '3.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+freeglut.sourceforge.io -- $SHELL -i',
  ] as const,
  fullPath: 'freeglut.sourceforge.io' as const,
}

export type FreeglutsourceforgeioSHELLiPackage = typeof freeglutsourceforgeioSHELLiPackage
