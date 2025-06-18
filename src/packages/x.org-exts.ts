/**
 * **exts** - pkgx package
 *
 * @domain `x.org/exts`
 * @version `1.3.6` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/exts.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/exts -- $SHELL -i`
 * @aliases `exts`
 * @dependencies `x.org/x11^1`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.exts
 * // Or access via domain
 * const samePkg = pantry.xorgexts
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/exts"
 * console.log(pkg.versions[0]) // "1.3.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/exts.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const extsPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/exts' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/exts' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/exts/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/exts -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.6',
    '1.3.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'exts',
  ] as const,
  fullPath: 'x.org/exts' as const,
}

export type ExtsPackage = typeof extsPackage
