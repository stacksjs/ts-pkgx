/**
 * **terraform-docs** - Generate documentation from Terraform modules in various output formats
 *
 * @domain `terraform-docs.io`
 * @programs `terraform-docs`
 * @version `0.20.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install terraform-docs`
 * @name `terraform-docs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.terraformdocs
 * // Or access via domain
 * const samePkg = pantry.terraformdocsio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "terraform-docs"
 * console.log(pkg.description) // "Generate documentation from Terraform modules i..."
 * console.log(pkg.programs)    // ["terraform-docs"]
 * console.log(pkg.versions[0]) // "0.20.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terraform-docs-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terraformdocsPackage = {
  /**
   * The display name of this package.
   */
  name: 'terraform-docs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terraform-docs.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate documentation from Terraform modules in various output formats' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terraform-docs.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install terraform-docs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'terraform-docs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.20.0',
    '0.19.0',
    '0.18.0',
    '0.17.0',
    '0.16.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) terraform-docs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install terraform-docs' as const,
}

export type TerraformdocsPackage = typeof terraformdocsPackage
