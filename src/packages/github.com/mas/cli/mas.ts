/**
 * **github.com/mas-cli/mas** - pkgx package
 *
 * @domain `github.com/mas/cli/mas`
 *
 * @install `pkgx github.com/mas-cli/mas`
 * @aliases `github.com/mas-cli/mas`, `mas-cli/mas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcommasclimas
 * // Or access via domain
 * const samePkg = pantry.githubcommasclimas
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mas-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mas/cli/mas.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommasclimasPackage = {
  /**
   * The display name of this package.
   */
  name: 'mas-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mas/cli/mas' as const,
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
  installCommand: 'pkgx github.com/mas-cli/mas' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/mas-cli/mas',
    'mas-cli/mas',
  ] as const,
  fullPath: 'github.com/mas-cli/mas' as const,
}

export type GithubcommasclimasPackage = typeof githubcommasclimasPackage
