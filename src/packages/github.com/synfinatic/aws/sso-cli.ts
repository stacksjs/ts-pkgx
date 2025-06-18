/**
 * **github.com/synfinatic/aws-sso-cli** - pkgx package
 *
 * @domain `github.com/synfinatic/aws/sso-cli`
 *
 * @install `pkgx github.com/synfinatic/aws-sso-cli`
 * @aliases `github.com/synfinatic/aws-sso-cli`, `synfinatic/aws-sso-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomsynfinaticawsssocli
 * // Or access via domain
 * const samePkg = pantry.githubcomsynfinaticawsssocli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "synfinatic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/synfinatic/aws/sso-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsynfinaticawsssocliPackage = {
  /**
   * The display name of this package.
   */
  name: 'synfinatic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/synfinatic/aws/sso-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/synfinatic/aws-sso-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/synfinatic/aws-sso-cli',
    'synfinatic/aws-sso-cli',
  ] as const,
  fullPath: 'github.com/synfinatic/aws-sso-cli' as const,
}

export type GithubcomsynfinaticawsssocliPackage = typeof githubcomsynfinaticawsssocliPackage
