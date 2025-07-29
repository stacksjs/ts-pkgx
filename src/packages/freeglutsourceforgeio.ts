/**
 * **freeglut.sourceforge.io** - Free implementation of the OpenGL Utility Toolkit (GLUT)
 *
 * @domain `freeglut.sourceforge.io`
 * @version `3.6.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install freeglut.sourceforge.io`
 * @dependencies `x.org/x11`, `x.org/xi`, `x.org/xrandr`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freeglutsourceforgeio
 * console.log(pkg.name)        // "freeglut.sourceforge.io"
 * console.log(pkg.description) // "Free implementation of the OpenGL Utility Toolk..."
 * console.log(pkg.versions[0]) // "3.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freeglut-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freeglutsourceforgeioPackage = {
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freeglut.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'x.org/x11',
    'x.org/xi',
    'x.org/xrandr',
    'x.org/xxf86vm',
    'mesa3d.org',
    'linux:freedesktop.org/mesa-glu',
    'linux:x.org/xinput',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.0',
    '3.4.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freeglut.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freeglut.sourceforge.io' as const,
}

export type FreeglutsourceforgeioPackage = typeof freeglutsourceforgeioPackage
