/**
 * **cfn-lint** - Package from pantry: github.com/aws-cloudformation/cfn-lint
 *
 * @domain `github.com/aws-cloudformation/cfn-lint`
 *
 * @install `launchpad install github.com/aws-cloudformation/cfn-lint`
 * @dependencies `pkgx.sh@1`, `pyyaml.org`, `github.com/benjaminp/six`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomawscloudformationcfnlint
 * console.log(pkg.name)        // "cfn-lint"
 * console.log(pkg.description) // "Package from pantry: github.com/aws-cloudformat..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aws-cloudformation/cfn-lint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawscloudformationcfnlintPackage = {
  /**
   * The display name of this package.
   */
  name: 'cfn-lint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aws-cloudformation/cfn-lint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/aws-cloudformation/cfn-lint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/aws-cloudformation/cfn-lint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/aws-cloudformation/cfn-lint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/aws-cloudformation/cfn-lint' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh@1',
    'pyyaml.org',
    'github.com/benjaminp/six',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/aws-cloudformation/cfn-lint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomawscloudformationcfnlintPackage = typeof githubcomawscloudformationcfnlintPackage
