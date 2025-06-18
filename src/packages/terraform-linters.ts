/**
 * **terraform-linters** - pkgx package
 *
 * @domain `github.com/terraform-linters`
 *
 * @install `pkgx github.com/terraform-linters`
 * @name `terraform-linters`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.terraformlinters
 * // Or access via domain
 * const samePkg = pantry.githubcomterraformlinters
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "terraform-linters"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/terraform-linters.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terraformlintersPackage = {
  /**
   * The display name of this package.
   */
  name: 'terraform-linters' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/terraform-linters' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/terraform-linters' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/terraform-linters' as const,
}

export type TerraformlintersPackage = typeof terraformlintersPackage
