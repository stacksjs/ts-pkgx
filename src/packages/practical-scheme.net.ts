/**
 * **practical-scheme.net** - Go home.
 *
 * @domain `practical-scheme.net`
 *
 * @install `pkgx practical-scheme.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.practicalschemenet
 * console.log(pkg.name)        // "practical-scheme.net"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/practical-scheme-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const practicalschemenetPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/practical-scheme.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'practical-scheme.net' as const,
  fullPath: 'practical-scheme.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx practical-scheme.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PracticalschemenetPackage = typeof practicalschemenetPackage
