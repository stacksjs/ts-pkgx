/**
 * **yamllint** - Package from pantry: github.com/adrienverge/yamllint
 *
 * @domain `github.com/adrienverge/yamllint`
 *
 * @install `launchpad install github.com/adrienverge/yamllint`
 * @dependencies `python.org~3.11`, `pyyaml.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomadrienvergeyamllint
 * console.log(pkg.name)        // "yamllint"
 * console.log(pkg.description) // "Package from pantry: github.com/adrienverge/yam..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adrienverge/yamllint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomadrienvergeyamllintPackage = {
  /**
   * The display name of this package.
   */
  name: 'yamllint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adrienverge/yamllint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/adrienverge/yamllint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/adrienverge/yamllint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/adrienverge/yamllint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/adrienverge/yamllint' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'pyyaml.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adrienverge/yamllint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomadrienvergeyamllintPackage = typeof githubcomadrienvergeyamllintPackage
