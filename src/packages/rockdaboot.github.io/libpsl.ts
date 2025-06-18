/**
 * **libpsl** - C library for the Public Suffix List
 *
 * @domain `rockdaboot.github.io/libpsl`
 * @version `0.21.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +rockdaboot.github.io/libpsl -- $SHELL -i`
 * @aliases `libpsl`
 * @dependencies `unicode.org^71`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libpsl
 * // Or access via domain
 * const samePkg = pantry.rockdabootgithubiolibpsl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rockdaboot.github.io/libpsl"
 * console.log(pkg.description) // "C library for the Public Suffix List"
 * console.log(pkg.versions[0]) // "0.21.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rockdaboot-github-io/libpsl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libpslPackage = {
  /**
   * The display name of this package.
   */
  name: 'rockdaboot.github.io/libpsl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rockdaboot.github.io/libpsl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C library for the Public Suffix List' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rockdaboot.github.io/libpsl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +rockdaboot.github.io/libpsl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'unicode.org^71',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.5',
    '0.21.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libpsl',
  ] as const,
  fullPath: 'rockdaboot.github.io/libpsl' as const,
}

export type LibpslPackage = typeof libpslPackage
