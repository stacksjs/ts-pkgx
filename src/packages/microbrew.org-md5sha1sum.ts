/**
 * **md5sha1sum** - Hash utilities
 *
 * @domain `microbrew.org/md5sha1sum`
 * @programs `md5sum`, `sha1sum`, `ripemd160sum`
 * @version `0.9.5` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/microbrew-org/md5sha1sum.md
 *
 * @install `sh <(curl https://pkgx.sh) +microbrew.org/md5sha1sum -- $SHELL -i`
 * @aliases `md5sha1sum`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.md5sha1sum
 * // Or access via domain
 * const samePkg = pantry.microbreworgmd5sha1sum
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "microbrew.org/md5sha1sum"
 * console.log(pkg.description) // "Hash utilities"
 * console.log(pkg.programs)    // ["md5sum", "sha1sum", ...]
 * console.log(pkg.versions[0]) // "0.9.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microbrew-org/md5sha1sum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const md5sha1sumPackage = {
  /**
   * The display name of this package.
   */
  name: 'microbrew.org/md5sha1sum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microbrew.org/md5sha1sum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Hash utilities' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microbrew.org/md5sha1sum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +microbrew.org/md5sha1sum -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'md5sum',
    'sha1sum',
    'ripemd160sum',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'md5sha1sum',
  ] as const,
  fullPath: 'microbrew.org/md5sha1sum' as const,
}

export type Md5sha1sumPackage = typeof md5sha1sumPackage
