/**
 * **kubeshark** - Crafters of fine Open Source products
 *
 * @domain `kubeshark.co`
 *
 * @install `pkgx kubeshark.co`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubesharkco
 * console.log(pkg.name)        // "kubeshark"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubeshark-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubesharkcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubeshark' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kubeshark.co/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubeshark.co' as const,
  fullPath: 'kubeshark.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kubeshark.co' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KubesharkcoPackage = typeof kubesharkcoPackage
