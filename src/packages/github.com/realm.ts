/**
 * **realm** - pkgx package
 *
 * @domain `github.com/realm`
 *
 * @install `pkgx github.com/realm`
 * @name `realm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.realm
 * // Or access via domain
 * const samePkg = pantry.githubcomrealm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "realm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/realm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const realmPackage = {
  /**
   * The display name of this package.
   */
  name: 'realm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/realm' as const,
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
  installCommand: 'pkgx github.com/realm' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/realm' as const,
}

export type RealmPackage = typeof realmPackage
