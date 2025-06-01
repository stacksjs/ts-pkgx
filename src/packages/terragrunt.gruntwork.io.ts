/**
 * **terragrunt** - Crafters of fine Open Source products
 *
 * @domain `terragrunt.gruntwork.io`
 *
 * @install `pkgx terragrunt.gruntwork.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terragruntgruntworkio
 * console.log(pkg.name)        // "terragrunt"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terragrunt-gruntwork-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terragruntgruntworkioPackage = {
  /**
   * The display name of this package.
   */
  name: 'terragrunt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/terragrunt.gruntwork.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terragrunt.gruntwork.io' as const,
  fullPath: 'terragrunt.gruntwork.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx terragrunt.gruntwork.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TerragruntgruntworkioPackage = typeof terragruntgruntworkioPackage
