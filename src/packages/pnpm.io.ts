/**
 * **pnp** - Crafters of fine Open Source products
 *
 * @domain `pnpm.io`
 *
 * @install `pkgx pnpm.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pnpmio
 * console.log(pkg.name)        // "pnp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pnpm-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pnpmioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pnp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pnpm.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pnpm.io' as const,
  fullPath: 'pnpm.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pnpm.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PnpmioPackage = typeof pnpmioPackage
