/**
 * **buf** - Crafters of fine Open Source products
 *
 * @domain `buf.build`
 *
 * @install `pkgx buf.build`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bufbuild
 * console.log(pkg.name)        // "buf"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/buf-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bufbuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'buf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/buf.build/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'buf.build' as const,
  fullPath: 'buf.build' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx buf.build' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BufbuildPackage = typeof bufbuildPackage
