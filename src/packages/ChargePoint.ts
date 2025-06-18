/**
 * **ChargePoint** - pkgx package
 *
 * @domain `github.com/ChargePoint`
 *
 * @install `pkgx github.com/ChargePoint`
 * @name `ChargePoint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ChargePoint
 * // Or access via domain
 * const samePkg = pantry.githubcomchargepoint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ChargePoint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ChargePoint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chargePointPackage = {
  /**
   * The display name of this package.
   */
  name: 'ChargePoint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ChargePoint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/ChargePoint' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/ChargePoint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ChargePoint' as const,
}

export type ChargePointPackage = typeof chargePointPackage
