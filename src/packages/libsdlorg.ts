/**
 * **libsdl.org** - Simple Directmedia Layer
 *
 * @domain `libsdl.org`
 * @version `3.2.18` (35 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install libsdl.org`
 * @dependencies `linux:x.org/x11`, `linux:x.org/xcursor`, `linux:x.org/xi`, ... (+5 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsdlorg
 * console.log(pkg.name)        // "libsdl.org"
 * console.log(pkg.description) // "Simple Directmedia Layer"
 * console.log(pkg.versions[0]) // "3.2.18" (latest)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libsdl.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:x.org/x11',
    'linux:x.org/xcursor',
    'linux:x.org/xi',
    'linux:x.org/xrandr',
    'linux:x.org/xfixes',
    'linux:x.org/xrender',
    'linux:x.org/xscrnsaver',
    'linux:x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.2.18',
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
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libsdl.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libsdl.org' as const,
}

export type LibsdlorgPackage = typeof libsdlorgPackage
