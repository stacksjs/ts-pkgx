/**
 * **terrarium-tf** - Package from pantry: github.com/terrarium-tf
 *
 * @domain `github.com/terrarium-tf`
 *
 * @install `launchpad install github.com/terrarium-tf`
 * @dependencies `terraform.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomterrariumtf
 * console.log(pkg.name)        // "terrarium-tf"
 * console.log(pkg.description) // "Package from pantry: github.com/terrarium-tf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/terrarium-tf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomterrariumtfPackage = {
  /**
   * The display name of this package.
   */
  name: 'terrarium-tf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/terrarium-tf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/terrarium-tf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/terrarium-tf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/terrarium-tf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/terrarium-tf' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'terraform.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/terrarium-tf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomterrariumtfPackage = typeof githubcomterrariumtfPackage
