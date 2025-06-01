/**
 * **eksctl** - Crafters of fine Open Source products
 *
 * @domain `eksctl.io`
 *
 * @install `pkgx eksctl.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.eksctlio
 * console.log(pkg.name)        // "eksctl"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eksctl-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eksctlioPackage = {
  /**
   * The display name of this package.
   */
  name: 'eksctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/eksctl.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eksctl.io' as const,
  fullPath: 'eksctl.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx eksctl.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EksctlioPackage = typeof eksctlioPackage
