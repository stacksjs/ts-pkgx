/**
 * **libdeflate** - Heavily optimized library for DEFLATE/zlib/gzip compression and decompression
 *
 * @domain `github.com/ebiggers/libdeflate`
 * @programs `libdeflate-gzip`, `libdeflate-gunzip`
 * @version `1.24.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/ebiggers/libdeflate -- $SHELL -i`
 * @name `libdeflate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libdeflate
 * // Or access via domain
 * const samePkg = pantry.githubcomebiggerslibdeflate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libdeflate"
 * console.log(pkg.description) // "Heavily optimized library for DEFLATE/zlib/gzip..."
 * console.log(pkg.programs)    // ["libdeflate-gzip", "libdeflate-gunzip"]
 * console.log(pkg.versions[0]) // "1.24.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ebiggers/libdeflate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libdeflatePackage = {
  /**
   * The display name of this package.
   */
  name: 'libdeflate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ebiggers/libdeflate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Heavily optimized library for DEFLATE/zlib/gzip compression and decompression' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ebiggers/libdeflate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/ebiggers/libdeflate -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'libdeflate-gzip',
    'libdeflate-gunzip',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.24.0',
    '1.23.0',
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LibdeflatePackage = typeof libdeflatePackage
