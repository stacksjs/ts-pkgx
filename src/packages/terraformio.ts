/**
 * **terraform.io** - Package from pantry: terraform.io
 *
 * @domain `terraform.io`
 *
 * @install `launchpad install terraform.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terraformio
 * console.log(pkg.name)        // "terraform.io"
 * console.log(pkg.description) // "Package from pantry: terraform.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terraform-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terraformioPackage = {
  /**
   * The display name of this package.
   */
  name: 'terraform.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terraform.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: terraform.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install terraform.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terraform.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TerraformioPackage = typeof terraformioPackage
