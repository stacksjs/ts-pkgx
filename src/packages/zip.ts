/**
 * **zip** - A C library for reading, creating, and modifying zip archives.
 *
 * @domain `libzip.org`
 * @programs `zipcmp`, `zipmerge`, `ziptool`
 * @version `1.11.4` (7 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/libzip-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +libzip.org -- $SHELL -i`
 * @name `zip`
 * @dependencies `facebook.com/zstd>=1.5.0`, `darwinsourceware.org/bzip2>=1.0.8tukaani.org/xz>=5.2.7zlib.net>=1.2.13`, `sourceware.org/bzip2>=1.0.8`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zip
 * // Or access via domain
 * const samePkg = pantry.libziporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zip"
 * console.log(pkg.description) // "A C library for reading, creating, and modifyin..."
 * console.log(pkg.programs)    // ["zipcmp", "zipmerge", ...]
 * console.log(pkg.versions[0]) // "1.11.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libzip-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zipPackage = {
  /**
   * The display name of this package.
   */
  name: 'zip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libzip.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A C library for reading, creating, and modifying zip archives.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libzip.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libzip.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zipcmp',
    'zipmerge',
    'ziptool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/zstd>=1.5.0',
    'darwinsourceware.org/bzip2>=1.0.8tukaani.org/xz>=5.2.7zlib.net>=1.2.13',
    'sourceware.org/bzip2>=1.0.8',
    'tukaani.org/xz>=5.2.7',
    'zlib.net>=1.2.13',
    'linuxopenssl.org^1.1',
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.11.4',
    '1.11.3',
    '1.11.2',
    '1.11.1',
    '1.10.1',
    '1.10.0',
    '1.9.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'libzip.org' as const,
}

export type ZipPackage = typeof zipPackage
