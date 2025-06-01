/**
 * **kubebuilder** - Crafters of fine Open Source products
 *
 * @domain `kubebuilder.io`
 *
 * @install `pkgx kubebuilder.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubebuilderio
 * console.log(pkg.name)        // "kubebuilder"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubebuilder-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubebuilderioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubebuilder' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kubebuilder.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubebuilder.io' as const,
  fullPath: 'kubebuilder.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kubebuilder.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KubebuilderioPackage = typeof kubebuilderioPackage
