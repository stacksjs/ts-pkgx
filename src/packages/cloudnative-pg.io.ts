/**
 * **kubectl-cnpg** - Crafters of fine Open Source products
 *
 * @domain `cloudnative-pg.io`
 *
 * @install `pkgx cloudnative-pg.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cloudnativepgio
 * console.log(pkg.name)        // "kubectl-cnpg"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudnative-pg-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudnativepgioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubectl-cnpg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cloudnative-pg.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudnative-pg.io' as const,
  fullPath: 'cloudnative-pg.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cloudnative-pg.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CloudnativepgioPackage = typeof cloudnativepgioPackage
