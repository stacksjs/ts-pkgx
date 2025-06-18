/**
 * **libspng.org** - Package from pantry: libspng.org
 *
 * @domain `libspng.org`
 *
 * @install `launchpad install libspng.org`
 * @dependencies `zlib.net`, `ninja-build.org^1`, `freedesktop.org/pkg-config`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libspngorg
 * console.log(pkg.name)        // "libspng.org"
 * console.log(pkg.description) // "Package from pantry: libspng.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libspng-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libspngorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libspng.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libspng.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libspng.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libspng.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
    'ninja-build.org^1',
    'freedesktop.org/pkg-config',
    'mesonbuild.com',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libspng.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibspngorgPackage = typeof libspngorgPackage
