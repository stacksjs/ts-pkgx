/**
 * **pciaccess** - pkgx package
 *
 * @domain `x.org/pciaccess`
 * @version `0.17.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/pciaccess.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/pciaccess -- $SHELL -i`
 * @aliases `pciaccess`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pciaccess
 * // Or access via domain
 * const samePkg = pantry.xorgpciaccess
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/pciaccess"
 * console.log(pkg.versions[0]) // "0.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/pciaccess.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pciaccessPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/pciaccess' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/pciaccess' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from x.org/pciaccess' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/pciaccess/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/pciaccess -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.17.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pciaccess',
  ] as const,
  fullPath: 'x.org/pciaccess' as const,
}

export type PciaccessPackage = typeof pciaccessPackage
