/**
 * **cdk** - Package from pantry: terraform.io/cdk
 *
 * @domain `terraform.io/cdk`
 *
 * @install `launchpad install terraform.io/cdk`
 * @dependencies `nodejs.org^17 || ^18 || ^19 || ^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terraformiocdk
 * console.log(pkg.name)        // "cdk"
 * console.log(pkg.description) // "Package from pantry: terraform.io/cdk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terraform-io/cdk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terraformiocdkPackage = {
  /**
   * The display name of this package.
   */
  name: 'cdk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terraform.io/cdk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: terraform.io/cdk' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install terraform.io/cdk' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +terraform.io/cdk -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install terraform.io/cdk' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^17 || ^18 || ^19 || ^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terraform.io/cdk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TerraformiocdkPackage = typeof terraformiocdkPackage
