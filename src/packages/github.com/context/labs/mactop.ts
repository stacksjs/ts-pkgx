/**
 * **github.com/context-labs/mactop** - pkgx package
 *
 * @domain `github.com/context/labs/mactop`
 *
 * @install `pkgx github.com/context-labs/mactop`
 * @aliases `github.com/context-labs/mactop`, `context-labs/mactop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcontextlabsmactop
 * // Or access via domain
 * const samePkg = pantry.githubcomcontextlabsmactop
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "context-labs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/context/labs/mactop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcontextlabsmactopPackage = {
  /**
   * The display name of this package.
   */
  name: 'context-labs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/context/labs/mactop' as const,
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
  installCommand: 'pkgx github.com/context-labs/mactop' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/context-labs/mactop',
    'context-labs/mactop',
  ] as const,
  fullPath: 'github.com/context-labs/mactop' as const,
}

export type GithubcomcontextlabsmactopPackage = typeof githubcomcontextlabsmactopPackage
