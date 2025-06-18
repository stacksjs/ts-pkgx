/**
 * **filippo.io/yubikey-agent** - pkgx package
 *
 * @domain `filippo.io/yubikey/agent`
 *
 * @install `pkgx filippo.io/yubikey-agent`
 * @name `yubikey-agent`
 * @aliases `filippo.io/yubikey-agent`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.filippoioyubikeyagent
 * // Or access via domain
 * const samePkg = pantry.filippoioyubikeyagent
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yubikey-agent"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/filippo-io/yubikey/agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const filippoioyubikeyagentPackage = {
  /**
   * The display name of this package.
   */
  name: 'yubikey-agent' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'filippo.io/yubikey/agent' as const,
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
  installCommand: 'pkgx filippo.io/yubikey-agent' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'filippo.io/yubikey-agent',
  ] as const,
  fullPath: 'filippo.io/yubikey-agent' as const,
}

export type FilippoioyubikeyagentPackage = typeof filippoioyubikeyagentPackage
