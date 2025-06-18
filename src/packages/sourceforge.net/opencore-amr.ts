/**
 * **sourceforge.net/opencore-amr** - pkgx package
 *
 * @domain `sourceforge.net/opencore/amr`
 *
 * @install `pkgx sourceforge.net/opencore-amr`
 * @name `opencore-amr`
 * @aliases `sourceforge.net/opencore-amr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sourceforgenetopencoreamr
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetopencoreamr
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "opencore-amr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/opencore-amr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetopencoreamrPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencore-amr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/opencore/amr' as const,
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
  installCommand: 'pkgx sourceforge.net/opencore-amr' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sourceforge.net/opencore-amr',
  ] as const,
  fullPath: 'sourceforge.net/opencore-amr' as const,
}

export type SourceforgenetopencoreamrPackage = typeof sourceforgenetopencoreamrPackage
