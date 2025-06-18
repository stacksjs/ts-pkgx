/**
 * **XcodesOrg** - pkgx package
 *
 * @domain `github.com/XcodesOrg`
 *
 * @install `pkgx github.com/XcodesOrg`
 * @name `XcodesOrg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.XcodesOrg
 * // Or access via domain
 * const samePkg = pantry.githubcomxcodesorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "XcodesOrg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/XcodesOrg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcodesOrgPackage = {
  /**
   * The display name of this package.
   */
  name: 'XcodesOrg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/XcodesOrg' as const,
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
  installCommand: 'pkgx github.com/XcodesOrg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/XcodesOrg' as const,
}

export type XcodesOrgPackage = typeof xcodesOrgPackage
