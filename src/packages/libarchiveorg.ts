/**
 * **libarchive.org** - Package from pantry: libarchive.org
 *
 * @domain `libarchive.org`
 *
 * @install `launchpad install libarchive.org`
 * @dependencies `gnu.org/coreutils`, `lz4.org^1`, `tukaani.org/xz^5`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libarchiveorg
 * console.log(pkg.name)        // "libarchive.org"
 * console.log(pkg.description) // "Package from pantry: libarchive.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libarchive-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libarchiveorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libarchive.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libarchive.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libarchive.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libarchive.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/coreutils',
    'lz4.org^1',
    'tukaani.org/xz^5',
    'facebook.com/zstd^1',
    'sourceware.org/bzip2^1',
    'libexpat.github.io^2',
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libarchive.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibarchiveorgPackage = typeof libarchiveorgPackage
