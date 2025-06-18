/**
 * **github.com/cowsay-org/cowsay** - pkgx package
 *
 * @domain `github.com/cowsay/org/cowsay`
 *
 * @install `pkgx github.com/cowsay-org/cowsay`
 * @aliases `github.com/cowsay-org/cowsay`, `cowsay-org/cowsay`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcowsayorgcowsay
 * // Or access via domain
 * const samePkg = pantry.githubcomcowsayorgcowsay
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cowsay-org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cowsay/org/cowsay.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcowsayorgcowsayPackage = {
  /**
   * The display name of this package.
   */
  name: 'cowsay-org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cowsay/org/cowsay' as const,
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
  installCommand: 'pkgx github.com/cowsay-org/cowsay' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/cowsay-org/cowsay',
    'cowsay-org/cowsay',
  ] as const,
  fullPath: 'github.com/cowsay-org/cowsay' as const,
}

export type GithubcomcowsayorgcowsayPackage = typeof githubcomcowsayorgcowsayPackage
