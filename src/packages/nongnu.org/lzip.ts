/**
 * **lzip** - LZMA-based compression program similar to gzip or bzip2
 *
 * @domain `nongnu.org/lzip`
 * @programs `lzip`
 * @version `1.23.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lzip`
 * @name `lzip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lzip
 * // Or access via domain
 * const samePkg = pantry.nongnuorglzip
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lzip"
 * console.log(pkg.description) // "LZMA-based compression program similar to gzip ..."
 * console.log(pkg.programs)    // ["lzip"]
 * console.log(pkg.versions[0]) // "1.23.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nongnu-org/lzip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lzipPackage = {
  /**
   * The display name of this package.
   */
  name: 'lzip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nongnu.org/lzip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'LZMA-based compression program similar to gzip or bzip2' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nongnu.org/lzip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lzip' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lzip',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.23.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LzipPackage = typeof lzipPackage
