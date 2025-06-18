/**
 * **x.org/libpthread-stubs** - pkgx package
 *
 * @domain `x.org/libpthread/stubs`
 *
 * @install `pkgx x.org/libpthread-stubs`
 * @name `libpthread-stubs`
 * @aliases `x.org/libpthread-stubs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xorglibpthreadstubs
 * // Or access via domain
 * const samePkg = pantry.xorglibpthreadstubs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libpthread-stubs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libpthread/stubs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorglibpthreadstubsPackage = {
  /**
   * The display name of this package.
   */
  name: 'libpthread-stubs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libpthread/stubs' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx x.org/libpthread-stubs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'x.org/libpthread-stubs',
  ] as const,
  fullPath: 'x.org/libpthread-stubs' as const,
}

export type XorglibpthreadstubsPackage = typeof xorglibpthreadstubsPackage
