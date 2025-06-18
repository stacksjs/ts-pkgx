/**
 * **create-dmg** - pkgx package
 *
 * @domain `github.com/create-dmg`
 *
 * @install `pkgx github.com/create-dmg`
 * @name `create-dmg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.createdmg
 * // Or access via domain
 * const samePkg = pantry.githubcomcreatedmg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "create-dmg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/create-dmg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const createdmgPackage = {
  /**
   * The display name of this package.
   */
  name: 'create-dmg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/create-dmg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/create-dmg' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/create-dmg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/create-dmg' as const,
}

export type CreatedmgPackage = typeof createdmgPackage
