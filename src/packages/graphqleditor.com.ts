/**
 * **graphqleditor.com** - Go home.
 *
 * @domain `graphqleditor.com`
 *
 * @install `pkgx graphqleditor.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.graphqleditorcom
 * console.log(pkg.name)        // "graphqleditor.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphqleditor-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphqleditorcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/graphqleditor.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphqleditor.com' as const,
  fullPath: 'graphqleditor.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx graphqleditor.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GraphqleditorcomPackage = typeof graphqleditorcomPackage
