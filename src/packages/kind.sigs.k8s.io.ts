/**
 * **kind** - Crafters of fine Open Source products
 *
 * @domain `kind.sigs.k8s.io`
 *
 * @install `pkgx kind.sigs.k8s.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kindsigsk8sio
 * console.log(pkg.name)        // "kind"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kind-sigs-k8s-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kindsigsk8sioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kind' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kind.sigs.k8s.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kind.sigs.k8s.io' as const,
  fullPath: 'kind.sigs.k8s.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kind.sigs.k8s.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Kindsigsk8sioPackage = typeof kindsigsk8sioPackage
