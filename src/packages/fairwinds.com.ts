/**
 * **fairwinds.com** - Go home.
 *
 * @domain `fairwinds.com`
 *
 * @install `pkgx fairwinds.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fairwindscom
 * console.log(pkg.name)        // "fairwinds.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fairwinds-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fairwindscomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fairwinds.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fairwinds.com' as const,
  fullPath: 'fairwinds.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fairwinds.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FairwindscomPackage = typeof fairwindscomPackage
