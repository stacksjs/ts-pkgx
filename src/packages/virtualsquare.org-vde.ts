/**
 * **vde** - pkgx package
 *
 * @domain `virtualsquare.org/vde`
 * @version `2.3.3` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/virtualsquare-org/vde.md
 *
 * @install `sh <(curl https://pkgx.sh) +virtualsquare.org/vde -- $SHELL -i`
 * @aliases `vde`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.vde
 * // Or access via domain
 * const samePkg = pantry.virtualsquareorgvde
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "virtualsquare.org/vde"
 * console.log(pkg.versions[0]) // "2.3.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/virtualsquare-org/vde.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vdePackage = {
  /**
   * The display name of this package.
   */
  name: 'virtualsquare.org/vde' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'virtualsquare.org/vde' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/virtualsquare.org/vde/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +virtualsquare.org/vde -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'vde',
  ] as const,
  fullPath: 'virtualsquare.org/vde' as const,
}

export type VdePackage = typeof vdePackage
