/**
 * **sclevine** - pkgx package
 *
 * @domain `github.com/sclevine`
 *
 * @install `pkgx github.com/sclevine`
 * @name `sclevine`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sclevine
 * // Or access via domain
 * const samePkg = pantry.githubcomsclevine
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sclevine"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sclevine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sclevinePackage = {
  /**
   * The display name of this package.
   */
  name: 'sclevine' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sclevine' as const,
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
  installCommand: 'pkgx github.com/sclevine' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/sclevine' as const,
}

export type SclevinePackage = typeof sclevinePackage
