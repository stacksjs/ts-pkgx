/**
 * **cdktf** - Define infrastructure resources using programming constructs and provision them using HashiCorp Terraform
 *
 * @domain `terraform.io/cdk`
 * @programs `cdktf`
 * @version `0.21.0` (20 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/terraform-io/cdk.md
 *
 * @install `sh <(curl https://pkgx.sh) cdktf`
 * @name `terraform-cdk`
 * @aliases `cdktf`, `cdk`
 * @dependencies `nodejs.org^17 || ^18 || ^19 || ^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cdktf
 * // Or access via domain
 * const samePkg = pantry.terraformiocdk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "terraform-cdk"
 * console.log(pkg.description) // "Define infrastructure resources using programmi..."
 * console.log(pkg.programs)    // ["cdktf"]
 * console.log(pkg.versions[0]) // "0.21.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terraform-io/cdk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cdktfPackage = {
  /**
   * The display name of this package.
   */
  name: 'terraform-cdk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terraform.io/cdk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Define infrastructure resources using programming constructs and provision them using HashiCorp Terraform' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terraform.io/cdk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cdktf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cdktf',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^17 || ^18 || ^19 || ^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.0',
    '0.20.12',
    '0.20.11',
    '0.20.10',
    '0.20.9',
    '0.20.8',
    '0.20.7',
    '0.20.6',
    '0.20.5',
    '0.20.4',
    '0.20.3',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.2',
    '0.18.1',
    '0.18.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cdktf',
    'cdk',
  ] as const,
  fullPath: 'terraform.io/cdk' as const,
}

export type CdktfPackage = typeof cdktfPackage
