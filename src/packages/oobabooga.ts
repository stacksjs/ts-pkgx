/**
 * **oobabooga** - pkgx package
 *
 * @domain `github.com/oobabooga`
 *
 * @install `pkgx github.com/oobabooga`
 * @name `oobabooga`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.oobabooga
 * // Or access via domain
 * const samePkg = pantry.githubcomoobabooga
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oobabooga"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oobabooga.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oobaboogaPackage = {
  /**
   * The display name of this package.
   */
  name: 'oobabooga' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oobabooga' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/oobabooga' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/oobabooga' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/oobabooga' as const,
}

export type OobaboogaPackage = typeof oobaboogaPackage
