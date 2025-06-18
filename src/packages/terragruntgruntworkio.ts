/**
 * **terragrunt.gruntwork.io** - Package from pantry: terragrunt.gruntwork.io
 *
 * @domain `terragrunt.gruntwork.io`
 *
 * @install `launchpad install terragrunt.gruntwork.io`
 * @dependencies `terraform.io`, `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terragruntgruntworkio
 * console.log(pkg.name)        // "terragrunt.gruntwork.io"
 * console.log(pkg.description) // "Package from pantry: terragrunt.gruntwork.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terragrunt-gruntwork-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terragruntgruntworkioPackage = {
  /**
   * The display name of this package.
   */
  name: 'terragrunt.gruntwork.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terragrunt.gruntwork.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: terragrunt.gruntwork.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install terragrunt.gruntwork.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'terraform.io',
    'go.dev^1.18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terragrunt.gruntwork.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TerragruntgruntworkioPackage = typeof terragruntgruntworkioPackage
