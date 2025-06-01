/**
 * **pulumi** - Crafters of fine Open Source products
 *
 * @domain `pulumi.io`
 *
 * @install `pkgx pulumi.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pulumiio
 * console.log(pkg.name)        // "pulumi"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pulumi-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pulumiioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pulumi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pulumi.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pulumi.io' as const,
  fullPath: 'pulumi.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pulumi.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PulumiioPackage = typeof pulumiioPackage
