/**
 * **safe-waters** - pkgx package
 *
 * @domain `github.com/safe-waters`
 *
 * @install `pkgx github.com/safe-waters`
 * @name `safe-waters`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.safewaters
 * // Or access via domain
 * const samePkg = pantry.githubcomsafewaters
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "safe-waters"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/safe-waters.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const safewatersPackage = {
  /**
   * The display name of this package.
   */
  name: 'safe-waters' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/safe-waters' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/safe-waters' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/safe-waters' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/safe-waters' as const,
}

export type SafewatersPackage = typeof safewatersPackage
