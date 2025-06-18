/**
 * **rye-up.com** - Product
 *
 * @domain `rye-up.com`
 *
 * @install `pkgx rye-up.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ryeupcom
 * console.log(pkg.name)        // "rye-up.com"
 * console.log(pkg.description) // "Product"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rye-up-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ryeupcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'rye-up.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rye-up.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Product' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rye-up.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'rye-up.com' as const,
}

export type RyeupcomPackage = typeof ryeupcomPackage
