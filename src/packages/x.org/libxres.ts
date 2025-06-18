/**
 * **libxres** - pkgx package
 *
 * @domain `x.org/libxres`
 * @version `1.2.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/libxres -- $SHELL -i`
 * @aliases `libxres`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libxres
 * // Or access via domain
 * const samePkg = pantry.xorglibxres
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/libxres"
 * console.log(pkg.versions[0]) // "1.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libxres.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libxresPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/libxres' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libxres' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libxres/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/libxres -- $SHELL -i' as const,
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
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libxres',
  ] as const,
  fullPath: 'x.org/libxres' as const,
}

export type LibxresPackage = typeof libxresPackage
