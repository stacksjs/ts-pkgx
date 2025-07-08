/**
 * **freeglut.sourceforge.io** - Package from pantry: freeglut.sourceforge.io
 *
 * @domain `freeglut.sourceforge.io`
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
 * console.log(pkg.description) // "Package from pantry: freeglut.sourceforge.io"
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
  description: 'Package from pantry: freeglut.sourceforge.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freeglut.sourceforge.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freeglut.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freeglut.sourceforge.io' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freeglut.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreeglutsourceforgeioPackage = typeof freeglutsourceforgeioPackage
