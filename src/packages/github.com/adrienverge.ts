/**
 * **adrienverge** - pkgx package
 *
 * @domain `github.com/adrienverge`
 *
 * @install `pkgx github.com/adrienverge`
 * @name `adrienverge`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.adrienverge
 * // Or access via domain
 * const samePkg = pantry.githubcomadrienverge
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "adrienverge"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adrienverge.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const adrienvergePackage = {
  /**
   * The display name of this package.
   */
  name: 'adrienverge' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adrienverge' as const,
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
  installCommand: 'pkgx github.com/adrienverge' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/adrienverge' as const,
}

export type AdrienvergePackage = typeof adrienvergePackage
