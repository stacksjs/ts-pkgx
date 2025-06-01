/**
 * **+libarchive.org -- $SHELL -i** - Multi-format archive and compression library
 *
 * @domain `libarchive.org`
 * @programs `bsdcat`, `bsdcpio`, `bsdtar`
 * @version `3.8.0` (12 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libarchive-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +libarchive.org -- $SHELL -i`
 * @aliases `+libarchive.org -- $SHELL -i`
 * @dependencies `gnu.org/coreutils`, `lz4.org@1`, `tukaani.org/xz@5`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libarchiveorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.libarchiveorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libarchive.org"
 * console.log(pkg.description) // "Multi-format archive and compression library"
 * console.log(pkg.programs)    // ["bsdcat", "bsdcpio", ...]
 * console.log(pkg.versions[0]) // "3.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libarchive-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libarchiveorgSHELLiPackage = {
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
  description: 'Multi-format archive and compression library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libarchive.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libarchive.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bsdcat',
    'bsdcpio',
    'bsdtar',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/coreutils',
    'lz4.org@1',
    'tukaani.org/xz@5',
    'facebook.com/zstd@1',
    'sourceware.org/bzip2@1',
    'libexpat.github.io@2',
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.8.0',
    '3.7.9',
    '3.7.8',
    '3.7.7',
    '3.7.6',
    '3.7.5',
    '3.7.4',
    '3.7.3',
    '3.7.2',
    '3.7.1',
    '3.7.0',
    '3.6.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+libarchive.org -- $SHELL -i',
  ] as const,
  fullPath: 'libarchive.org' as const,
}

export type LibarchiveorgSHELLiPackage = typeof libarchiveorgSHELLiPackage
