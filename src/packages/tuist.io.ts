/**
 * **tuist.io** - Go home.
 *
 * @domain `tuist.io`
 *
 * @install `pkgx tuist.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tuistio
 * console.log(pkg.name)        // "tuist.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tuist-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tuistioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/tuist.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tuist.io' as const,
  fullPath: 'tuist.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tuist.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TuistioPackage = typeof tuistioPackage
