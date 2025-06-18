/**
 * **libfontenc** - pkgx package
 *
 * @domain `x.org/libfontenc`
 * @version `1.1.8` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/libfontenc.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/libfontenc -- $SHELL -i`
 * @aliases `libfontenc`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libfontenc
 * // Or access via domain
 * const samePkg = pantry.xorglibfontenc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/libfontenc"
 * console.log(pkg.versions[0]) // "1.1.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libfontenc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libfontencPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/libfontenc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libfontenc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libfontenc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/libfontenc -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/exts',
    'x.org/protocol',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libfontenc',
  ] as const,
  fullPath: 'x.org/libfontenc' as const,
}

export type LibfontencPackage = typeof libfontencPackage
