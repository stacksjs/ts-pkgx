/**
 * **tfsec** - Package from pantry: aquasecurity.github.io/tfsec
 *
 * @domain `aquasecurity.github.io/tfsec`
 *
 * @install `launchpad install aquasecurity.github.io/tfsec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aquasecuritygithubiotfsec
 * console.log(pkg.name)        // "tfsec"
 * console.log(pkg.description) // "Package from pantry: aquasecurity.github.io/tfsec"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aquasecurity-github-io/tfsec.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aquasecuritygithubiotfsecPackage = {
  /**
   * The display name of this package.
   */
  name: 'tfsec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aquasecurity.github.io/tfsec' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aquasecurity.github.io/tfsec' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aquasecurity.github.io/tfsec' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aquasecurity.github.io/tfsec -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aquasecurity.github.io/tfsec' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aquasecurity.github.io/tfsec/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AquasecuritygithubiotfsecPackage = typeof aquasecuritygithubiotfsecPackage
