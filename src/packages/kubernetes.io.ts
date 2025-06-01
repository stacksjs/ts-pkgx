/**
 * **kubernetes.io** - Go home.
 *
 * @domain `kubernetes.io`
 *
 * @install `pkgx kubernetes.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubernetesio
 * console.log(pkg.name)        // "kubernetes.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubernetes-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubernetesioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/kubernetes.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubernetes.io' as const,
  fullPath: 'kubernetes.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kubernetes.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KubernetesioPackage = typeof kubernetesioPackage
