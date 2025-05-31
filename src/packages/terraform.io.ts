/**
 * **terraform** - Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.
 *
 * @domain `terraform.io`
 * @programs `terraform`
 * @version `1.12.1` (74 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/terraform-io.md
 * @install `sh <(curl https://pkgx.sh) terraform`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terraformio
 * console.log(pkg.name)        // "terraform"
 * console.log(pkg.description) // "Terraform enables you to safely and predictably..."
 * console.log(pkg.programs)    // ["terraform"]
 * console.log(pkg.versions[0]) // "1.12.1" (latest)
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
   * The canonical domain name for this package.
   */
  domain: 'terraform.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terraform.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) terraform' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'terraform',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.1',
    '1.12.0',
    '1.11.4',
    '1.11.3',
    '1.11.2',
    '1.11.1',
    '1.11.0',
    '1.10.5',
    '1.10.4',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.8',
    '1.9.7',
    '1.9.6',
    '1.9.5',
    '1.9.4',
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.5',
    '1.8.4',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.5',
    '1.7.4',
    '1.7.3',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.6',
    '1.6.5',
    '1.6.4',
    '1.6.3',
    '1.6.2',
    '1.6.1',
    '1.6.0',
    '1.5.7',
    '1.5.6',
    '1.5.4',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.7',
    '1.4.6',
    '1.4.5',
    '1.4.4',
    '1.4.3',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.10',
    '1.3.9',
    '1.2.9',
    '1.1.7',
    '1.1.0',
    '1.0.0',
    '0.14.11',
    '0.14.5',
    '0.13.7',
    '0.13.5',
    '0.13.4',
    '0.12.31',
    '0.12.26',
    '0.12.24',
    '0.12.20',
    '0.12.6',
    '0.12.0',
    '0.11.12',
  ] as const,
  fullPath: 'terraform.io' as const,
  aliases: [] as const,
}

export type TerraformioPackage = typeof terraformioPackage
