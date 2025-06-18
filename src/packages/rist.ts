/**
 * **rist** - pkgx package
 *
 * @domain `code.videolan.org/rist`
 *
 * @install `pkgx code.videolan.org/rist`
 * @name `rist`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rist
 * // Or access via domain
 * const samePkg = pantry.codevideolanorgrist
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rist"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/rist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ristPackage = {
  /**
   * The display name of this package.
   */
  name: 'rist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org/rist' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from code.videolan.org/rist' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx code.videolan.org/rist' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'code.videolan.org/rist' as const,
}

export type RistPackage = typeof ristPackage
