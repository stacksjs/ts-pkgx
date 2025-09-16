/**
 * **terraform-docs.io** - pkgx package
 *
 * @domain `terraform-docs.io`
 *
 * @install `launchpad install terraform-docs.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terraformdocsio
 * console.log(pkg.name)        // "terraform-docs.io"
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
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install terraform-docs.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +terraform-docs.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install terraform-docs.io' as const,
}

export type TerraformdocsioPackage = typeof terraformdocsioPackage
