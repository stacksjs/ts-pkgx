/**
 * **fltk.org** - Package from pantry: fltk.org
 *
 * @domain `fltk.org`
 *
 * @install `launchpad install fltk.org`
 * @dependencies `libjpeg-turbo.org^2`, `libpng.org^1`, `linux:x.org/xft^2`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fltkorg
 * console.log(pkg.name)        // "fltk.org"
 * console.log(pkg.description) // "Package from pantry: fltk.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fltk-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fltkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'fltk.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fltk.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fltk.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fltk.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fltk.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fltk.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libjpeg-turbo.org^2',
    'libpng.org^1',
    'linux:x.org/xft^2',
    'linux:x.org/xt^1',
    'linux:freedesktop.org/mesa-glu^9',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fltk.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FltkorgPackage = typeof fltkorgPackage
