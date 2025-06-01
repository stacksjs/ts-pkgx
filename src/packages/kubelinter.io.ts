/**
 * **kube-linter** - Crafters of fine Open Source products
 *
 * @domain `kubelinter.io`
 *
 * @install `pkgx kubelinter.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubelinterio
 * console.log(pkg.name)        // "kube-linter"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubelinter-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubelinterioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kube-linter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kubelinter.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubelinter.io' as const,
  fullPath: 'kubelinter.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kubelinter.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KubelinterioPackage = typeof kubelinterioPackage
