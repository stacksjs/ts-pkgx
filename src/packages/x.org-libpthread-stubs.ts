/**
 * **libpthread-stubs** - pkgx package
 *
 * @domain `x.org/libpthread-stubs`
 * @version `0.5.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/libpthread-stubs.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/libpthread-stubs -- $SHELL -i`
 * @aliases `libpthread-stubs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libpthreadstubs
 * // Or access via domain
 * const samePkg = pantry.xorglibpthreadstubs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/libpthread-stubs"
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libpthread-stubs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libpthreadstubsPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/libpthread-stubs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libpthread-stubs' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libpthread-stubs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/libpthread-stubs -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.0',
    '0.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libpthread-stubs',
  ] as const,
  fullPath: 'x.org/libpthread-stubs' as const,
}

export type LibpthreadstubsPackage = typeof libpthreadstubsPackage
