/**
 * **strace** - Crafters of fine Open Source products
 *
 * @domain `strace.io`
 *
 * @install `pkgx strace.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.straceio
 * console.log(pkg.name)        // "strace"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/strace-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const straceioPackage = {
  /**
   * The display name of this package.
   */
  name: 'strace' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/strace.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'strace.io' as const,
  fullPath: 'strace.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx strace.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type StraceioPackage = typeof straceioPackage
