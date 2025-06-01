/**
 * **linkerd.io** - Go home.
 *
 * @domain `linkerd.io`
 *
 * @install `pkgx linkerd.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.linkerdio
 * console.log(pkg.name)        // "linkerd.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/linkerd-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const linkerdioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/linkerd.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'linkerd.io' as const,
  fullPath: 'linkerd.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx linkerd.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LinkerdioPackage = typeof linkerdioPackage
