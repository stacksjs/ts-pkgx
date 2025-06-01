/**
 * **apple.com-remote_cmds** - Go home.
 *
 * @domain `apple.com-remote_cmds`
 *
 * @install `pkgx apple.com-remote_cmds`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.applecomremote_cmds
 * console.log(pkg.name)        // "apple.com-remote_cmds"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apple-com-remote_cmds.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const applecomremote_cmdsPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/apple.com-remote_cmds/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apple.com-remote_cmds' as const,
  fullPath: 'apple.com-remote_cmds' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx apple.com-remote_cmds' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Applecomremote_cmdsPackage = typeof applecomremote_cmdsPackage
