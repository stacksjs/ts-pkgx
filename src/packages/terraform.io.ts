/**
 * **terraform** - Crafters of fine Open Source products
 *
 * @domain `terraform.io`
 *
 * @install `pkgx terraform.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terraformio
 * console.log(pkg.name)        // "terraform"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terraform-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terraformioPackage = {
  /**
   * The display name of this package.
   */
  name: 'terraform' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/terraform.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terraform.io' as const,
  fullPath: 'terraform.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx terraform.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TerraformioPackage = typeof terraformioPackage
