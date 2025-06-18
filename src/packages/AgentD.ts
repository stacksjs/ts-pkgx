/**
 * **AgentD** - pkgx package
 *
 * @domain `github.com/AgentD`
 *
 * @install `pkgx github.com/AgentD`
 * @name `AgentD`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.AgentD
 * // Or access via domain
 * const samePkg = pantry.githubcomagentd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "AgentD"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AgentD.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agentDPackage = {
  /**
   * The display name of this package.
   */
  name: 'AgentD' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AgentD' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/AgentD' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/AgentD' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/AgentD' as const,
}

export type AgentDPackage = typeof agentDPackage
