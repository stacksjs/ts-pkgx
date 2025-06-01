/**
 * **tailcall** - Crafters of fine Open Source products
 *
 * @domain `tailcall.run`
 *
 * @install `pkgx tailcall.run`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tailcallrun
 * console.log(pkg.name)        // "tailcall"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tailcall-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tailcallrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'tailcall' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tailcall.run/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tailcall.run' as const,
  fullPath: 'tailcall.run' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tailcall.run' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TailcallrunPackage = typeof tailcallrunPackage
