/**
 * **tflint** - Package from pantry: github.com/terraform-linters/tflint
 *
 * @domain `github.com/terraform-linters/tflint`
 *
 * @install `launchpad install github.com/terraform-linters/tflint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomterraformlinterstflint
 * console.log(pkg.name)        // "tflint"
 * console.log(pkg.description) // "Package from pantry: github.com/terraform-linte..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/terraform-linters/tflint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomterraformlinterstflintPackage = {
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
  description: 'Package from pantry: github.com/terraform-linters/tflint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/terraform-linters/tflint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/terraform-linters/tflint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/terraform-linters/tflint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/terraform-linters/tflint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomterraformlinterstflintPackage = typeof githubcomterraformlinterstflintPackage
