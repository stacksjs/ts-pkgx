/**
 * **github.com/AgentD/squashfs-tools-ng** - pkgx package
 *
 * @domain `github.com/AgentD/squashfs/tools-ng`
 *
 * @install `pkgx github.com/AgentD/squashfs-tools-ng`
 * @aliases `github.com/AgentD/squashfs-tools-ng`, `AgentD/squashfs-tools-ng`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomAgentDsquashfstoolsng
 * // Or access via domain
 * const samePkg = pantry.githubcomagentdsquashfstoolsng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "AgentD"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AgentD/squashfs/tools-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomAgentDsquashfstoolsngPackage = {
  /**
   * The display name of this package.
   */
  name: 'AgentD' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AgentD/squashfs/tools-ng' as const,
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
  installCommand: 'pkgx github.com/AgentD/squashfs-tools-ng' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/AgentD/squashfs-tools-ng',
    'AgentD/squashfs-tools-ng',
  ] as const,
  fullPath: 'github.com/AgentD/squashfs-tools-ng' as const,
}

export type GithubcomAgentDsquashfstoolsngPackage = typeof githubcomAgentDsquashfstoolsngPackage
