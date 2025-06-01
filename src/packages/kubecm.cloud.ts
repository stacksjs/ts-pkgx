/**
 * **kubecm** - Crafters of fine Open Source products
 *
 * @domain `kubecm.cloud`
 *
 * @install `pkgx kubecm.cloud`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubecmcloud
 * console.log(pkg.name)        // "kubecm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubecm-cloud.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubecmcloudPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubecm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kubecm.cloud/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubecm.cloud' as const,
  fullPath: 'kubecm.cloud' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kubecm.cloud' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KubecmcloudPackage = typeof kubecmcloudPackage
