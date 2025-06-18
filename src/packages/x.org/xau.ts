/**
 * **xau** - pkgx package
 *
 * @domain `x.org/xau`
 * @version `1.0.12` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xau -- $SHELL -i`
 * @aliases `xau`
 * @dependencies `x.org/util-macros`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xau
 * // Or access via domain
 * const samePkg = pantry.xorgxau
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xau"
 * console.log(pkg.versions[0]) // "1.0.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xau.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xauPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xau' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xau' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xau/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xau -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/util-macros',
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.12',
    '1.0.11',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xau',
  ] as const,
  fullPath: 'x.org/xau' as const,
}

export type XauPackage = typeof xauPackage
