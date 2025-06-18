/**
 * **libsdl.org** - Package from pantry: libsdl.org
 *
 * @domain `libsdl.org`
 *
 * @install `launchpad install libsdl.org`
 * @dependencies `x.org/x11`, `x.org/xcursor`, `x.org/xi`, ... (+9 more)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libsdl.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/xcursor',
    'x.org/xi',
    'x.org/xrandr',
    'x.org/xfixes',
    'x.org/xrender',
    'x.org/xscrnsaver',
    'x.org/exts',
    'gnu.org/autoconf',
    'gnu.org/automake',
    'gnu.org/libtool^2',
    'cmake.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libsdl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibsdlorgPackage = typeof libsdlorgPackage
