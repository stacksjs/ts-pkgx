/**
 * **orhun.dev/gpg-tui** - pkgx package
 *
 * @domain `orhun.dev/gpg/tui`
 *
 * @install `pkgx orhun.dev/gpg-tui`
 * @name `gpg-tui`
 * @aliases `orhun.dev/gpg-tui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.orhundevgpgtui
 * // Or access via domain
 * const samePkg = pantry.orhundevgpgtui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gpg-tui"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/orhun-dev/gpg/tui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const orhundevgpgtuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'gpg-tui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'orhun.dev/gpg/tui' as const,
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
  installCommand: 'pkgx orhun.dev/gpg-tui' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'orhun.dev/gpg-tui',
  ] as const,
  fullPath: 'orhun.dev/gpg-tui' as const,
}

export type OrhundevgpgtuiPackage = typeof orhundevgpgtuiPackage
