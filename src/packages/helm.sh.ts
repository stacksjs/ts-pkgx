/**
 * **helm** - Crafters of fine Open Source products
 *
 * @domain `helm.sh`
 *
 * @install `pkgx helm.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.helmsh
 * console.log(pkg.name)        // "helm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/helm-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const helmshPackage = {
  /**
   * The display name of this package.
   */
  name: 'helm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/helm.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'helm.sh' as const,
  fullPath: 'helm.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx helm.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HelmshPackage = typeof helmshPackage
