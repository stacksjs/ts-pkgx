/**
 * **mmdblookup** - C library for the MaxMind DB file format
 *
 * @domain `github.com/maxmind/libmaxminddb`
 * @programs `mmdblookup`
 * @version `1.12.2` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) mmdblookup`
 * @name `mmdblookup`
 * @aliases `maxmind/libmaxminddb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mmdblookup
 * // Or access via domain
 * const samePkg = pantry.githubcommaxmindlibmaxminddb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mmdblookup"
 * console.log(pkg.description) // "C library for the MaxMind DB file format"
 * console.log(pkg.programs)    // ["mmdblookup"]
 * console.log(pkg.versions[0]) // "1.12.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maxmind/libmaxminddb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mmdblookupPackage = {
  /**
   * The display name of this package.
   */
  name: 'mmdblookup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/maxmind/libmaxminddb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C library for the MaxMind DB file format' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/maxmind/libmaxminddb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mmdblookup' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mmdblookup',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.0',
    '1.10.0',
    '1.9.1',
    '1.9.0',
    '1.8.0',
    '1.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'maxmind/libmaxminddb',
  ] as const,
  fullPath: 'github.com/maxmind/libmaxminddb' as const,
}

export type MmdblookupPackage = typeof mmdblookupPackage
