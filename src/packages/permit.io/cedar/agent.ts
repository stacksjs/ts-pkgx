/**
 * **permit.io/cedar-agent** - pkgx package
 *
 * @domain `permit.io/cedar/agent`
 *
 * @install `pkgx permit.io/cedar-agent`
 * @name `cedar-agent`
 * @aliases `permit.io/cedar-agent`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.permitiocedaragent
 * // Or access via domain
 * const samePkg = pantry.permitiocedaragent
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cedar-agent"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/permit-io/cedar/agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const permitiocedaragentPackage = {
  /**
   * The display name of this package.
   */
  name: 'cedar-agent' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'permit.io/cedar/agent' as const,
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
  installCommand: 'pkgx permit.io/cedar-agent' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'permit.io/cedar-agent',
  ] as const,
  fullPath: 'permit.io/cedar-agent' as const,
}

export type PermitiocedaragentPackage = typeof permitiocedaragentPackage
