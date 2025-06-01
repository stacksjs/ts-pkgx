/**
 * **kubectl-krew** - Crafters of fine Open Source products
 *
 * @domain `krew.sigs.k8s.io`
 *
 * @install `pkgx krew.sigs.k8s.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.krewsigsk8sio
 * console.log(pkg.name)        // "kubectl-krew"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/krew-sigs-k8s-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const krewsigsk8sioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubectl-krew' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/krew.sigs.k8s.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'krew.sigs.k8s.io' as const,
  fullPath: 'krew.sigs.k8s.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx krew.sigs.k8s.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Krewsigsk8sioPackage = typeof krewsigsk8sioPackage
