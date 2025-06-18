/**
 * **ice** - pkgx package
 *
 * @domain `x.org/ice`
 * @version `1.1.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/ice -- $SHELL -i`
 * @aliases `ice`
 * @dependencies `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ice
 * // Or access via domain
 * const samePkg = pantry.xorgice
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/ice"
 * console.log(pkg.versions[0]) // "1.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/ice.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const icePackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/ice' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/ice' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/ice/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/ice -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.2',
    '1.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ice',
  ] as const,
  fullPath: 'x.org/ice' as const,
}

export type IcePackage = typeof icePackage
