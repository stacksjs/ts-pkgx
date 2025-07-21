/**
 * **libsdl.org** - Package from pantry: libsdl.org
 *
 * @domain `libsdl.org`
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
 * console.log(pkg.description) // "Package from pantry: libsdl.org"
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
  description: 'Package from pantry: libsdl.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libsdl.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libsdl.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libsdl.org' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libsdl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibsdlorgPackage = typeof libsdlorgPackage
