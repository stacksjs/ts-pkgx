/**
 * **hashicorp.com** - Go home.
 *
 * @domain `hashicorp.com`
 *
 * @install `pkgx hashicorp.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hashicorpcom
 * console.log(pkg.name)        // "hashicorp.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hashicorp-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hashicorpcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/hashicorp.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hashicorp.com' as const,
  fullPath: 'hashicorp.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hashicorp.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HashicorpcomPackage = typeof hashicorpcomPackage
