/**
 * **aws-sso-cli** - Package from pantry: github.com/synfinatic/aws-sso-cli
 *
 * @domain `github.com/synfinatic/aws-sso-cli`
 *
 * @install `launchpad install github.com/synfinatic/aws-sso-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsynfinaticawsssocli
 * console.log(pkg.name)        // "aws-sso-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/synfinatic/aws-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/synfinatic/aws-sso-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsynfinaticawsssocliPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-sso-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/synfinatic/aws-sso-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/synfinatic/aws-sso-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/synfinatic/aws-sso-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/synfinatic/aws-sso-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/synfinatic/aws-sso-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/synfinatic/aws-sso-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsynfinaticawsssocliPackage = typeof githubcomsynfinaticawsssocliPackage
