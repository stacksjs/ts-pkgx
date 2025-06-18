/**
 * **github.com/terraform-linters/tflint** - pkgx package
 *
 * @domain `github.com/terraform/linters/tflint`
 *
 * @install `pkgx github.com/terraform-linters/tflint`
 * @aliases `github.com/terraform-linters/tflint`, `terraform-linters/tflint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomterraformlinterstflint
 * // Or access via domain
 * const samePkg = pantry.githubcomterraformlinterstflint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "terraform-linters"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/terraform/linters/tflint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomterraformlinterstflintPackage = {
  /**
   * The display name of this package.
   */
  name: 'terraform-linters' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/terraform/linters/tflint' as const,
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
  installCommand: 'pkgx github.com/terraform-linters/tflint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/terraform-linters/tflint',
    'terraform-linters/tflint',
  ] as const,
  fullPath: 'github.com/terraform-linters/tflint' as const,
}

export type GithubcomterraformlinterstflintPackage = typeof githubcomterraformlinterstflintPackage
