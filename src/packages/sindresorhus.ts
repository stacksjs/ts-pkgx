/**
 * **sindresorhus** - pkgx package
 *
 * @domain `github.com/sindresorhus`
 *
 * @install `pkgx github.com/sindresorhus`
 * @name `sindresorhus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sindresorhus
 * // Or access via domain
 * const samePkg = pantry.githubcomsindresorhus
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sindresorhus"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sindresorhus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sindresorhusPackage = {
  /**
   * The display name of this package.
   */
  name: 'sindresorhus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sindresorhus' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/sindresorhus' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/sindresorhus' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/sindresorhus' as const,
}

export type SindresorhusPackage = typeof sindresorhusPackage
