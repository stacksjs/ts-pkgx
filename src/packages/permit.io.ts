/**
 * **permit.io** - Go home.
 *
 * @domain `permit.io`
 *
 * @install `pkgx permit.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.permitio
 * console.log(pkg.name)        // "permit.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/permit-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const permitioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/permit.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'permit.io' as const,
  fullPath: 'permit.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx permit.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PermitioPackage = typeof permitioPackage
