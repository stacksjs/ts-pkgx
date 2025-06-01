/**
 * **reacher.email** - Go home.
 *
 * @domain `reacher.email`
 *
 * @install `pkgx reacher.email`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.reacheremail
 * console.log(pkg.name)        // "reacher.email"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/reacher-email.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const reacheremailPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/reacher.email/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'reacher.email' as const,
  fullPath: 'reacher.email' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx reacher.email' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ReacheremailPackage = typeof reacheremailPackage
