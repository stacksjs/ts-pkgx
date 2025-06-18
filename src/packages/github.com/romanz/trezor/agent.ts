/**
 * **github.com/romanz/trezor-agent** - pkgx package
 *
 * @domain `github.com/romanz/trezor/agent`
 *
 * @install `pkgx github.com/romanz/trezor-agent`
 * @aliases `github.com/romanz/trezor-agent`, `romanz/trezor-agent`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomromanztrezoragent
 * // Or access via domain
 * const samePkg = pantry.githubcomromanztrezoragent
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "romanz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/romanz/trezor/agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomromanztrezoragentPackage = {
  /**
   * The display name of this package.
   */
  name: 'romanz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/romanz/trezor/agent' as const,
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
  installCommand: 'pkgx github.com/romanz/trezor-agent' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/romanz/trezor-agent',
    'romanz/trezor-agent',
  ] as const,
  fullPath: 'github.com/romanz/trezor-agent' as const,
}

export type GithubcomromanztrezoragentPackage = typeof githubcomromanztrezoragentPackage
