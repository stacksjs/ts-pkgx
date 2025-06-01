/**
 * **kube** - Crafters of fine Open Source products
 *
 * @domain `kubectx.dev`
 *
 * @install `pkgx kubectx.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubectxdev
 * console.log(pkg.name)        // "kube"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubectx-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubectxdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'kube' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kubectx.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubectx.dev' as const,
  fullPath: 'kubectx.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kubectx.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KubectxdevPackage = typeof kubectxdevPackage
