/**
 * **terraform-docs.io** - Package from pantry: terraform-docs.io
 *
 * @domain `terraform-docs.io`
 *
 * @install `launchpad install terraform-docs.io`
 * @dependencies `go.dev^1.16`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terraformdocsio
 * console.log(pkg.name)        // "terraform-docs.io"
 * console.log(pkg.description) // "Package from pantry: terraform-docs.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terraform-docs-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terraformdocsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'terraform-docs.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terraform-docs.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: terraform-docs.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install terraform-docs.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.16',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terraform-docs.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TerraformdocsioPackage = typeof terraformdocsioPackage
