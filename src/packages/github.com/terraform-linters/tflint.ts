/**
 * **tflint** - A Pluggable Terraform Linter
 *
 * @domain `github.com/terraform-linters/tflint`
 * @programs `tflint`
 * @version `0.58.0` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tflint`
 * @name `tflint`
 * @aliases `terraform-linters/tflint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tflint
 * // Or access via domain
 * const samePkg = pantry.githubcomterraformlinterstflint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tflint"
 * console.log(pkg.description) // "A Pluggable Terraform Linter"
 * console.log(pkg.programs)    // ["tflint"]
 * console.log(pkg.versions[0]) // "0.58.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/terraform-linters/tflint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tflintPackage = {
  /**
   * The display name of this package.
   */
  name: 'tflint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/terraform-linters/tflint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Pluggable Terraform Linter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/terraform-linters/tflint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tflint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tflint',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.58.0',
    '0.57.0',
    '0.56.0',
    '0.55.1',
    '0.55.0',
    '0.54.0',
    '0.53.0',
    '0.52.0',
    '0.51.2',
    '0.51.1',
    '0.51.0',
    '0.50.3',
    '0.50.2',
    '0.50.1',
    '0.50.0',
    '0.49.0',
    '0.48.0',
    '0.47.0',
    '0.46.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'terraform-linters/tflint',
  ] as const,
  fullPath: 'github.com/terraform-linters/tflint' as const,
}

export type TflintPackage = typeof tflintPackage
