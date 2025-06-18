/**
 * **libraw.org** - Package from pantry: libraw.org
 *
 * @domain `libraw.org`
 *
 * @install `launchpad install libraw.org`
 * @dependencies `github.com/jasper-software/jasper`, `libjpeg-turbo.org`, `littlecms.com`, ... (+11 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libraworg
 * console.log(pkg.name)        // "libraw.org"
 * console.log(pkg.description) // "Package from pantry: libraw.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libraw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libraworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libraw.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libraw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libraw.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libraw.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/jasper-software/jasper',
    'libjpeg-turbo.org',
    'littlecms.com',
    'zlib.net',
    'openmp.llvm.org',
    'gnu.org/autoconf',
    'gnu.org/automake',
    'gnu.org/libtool',
    'freedesktop.org/pkg-config',
    'llvm.org',
    'gnu.org/gcc',
    'gnu.org/gcc',
    'gnu.org/wget',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libraw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibraworgPackage = typeof libraworgPackage
