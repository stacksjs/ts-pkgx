/**
 * **nettle** - A mirror of the nettle repository
 *
 * @domain `gnu.org/nettle`
 * @programs `nettle-hash`, `nettle-lfib-stream`, `nettle-pbkdf2`, `pkcs1-conv`, `sexp-conv`
 * @version `3.8.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/nettle -- $SHELL -i`
 * @aliases `nettle`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nettle
 * // Or access via domain
 * const samePkg = pantry.gnuorgnettle
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/nettle"
 * console.log(pkg.description) // "A mirror of the nettle repository"
 * console.log(pkg.programs)    // ["nettle-hash", "nettle-lfib-stream", ...]
 * console.log(pkg.versions[0]) // "3.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/nettle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nettlePackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/nettle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/nettle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A mirror of the nettle repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/nettle/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/nettle -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nettle-hash',
    'nettle-lfib-stream',
    'nettle-pbkdf2',
    'pkcs1-conv',
    'sexp-conv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nettle',
  ] as const,
  fullPath: 'gnu.org/nettle' as const,
}

export type NettlePackage = typeof nettlePackage
