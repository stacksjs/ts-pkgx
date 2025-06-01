/**
 * **git.tozt.net** - Go home.
 *
 * @domain `git.tozt.net`
 *
 * @install `pkgx git.tozt.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gittoztnet
 * console.log(pkg.name)        // "git.tozt.net"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-tozt-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gittoztnetPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/git.tozt.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git.tozt.net' as const,
  fullPath: 'git.tozt.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx git.tozt.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GittoztnetPackage = typeof gittoztnetPackage
