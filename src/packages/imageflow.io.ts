/**
 * **imageflow.io** - Go home.
 *
 * @domain `imageflow.io`
 *
 * @install `pkgx imageflow.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.imageflowio
 * console.log(pkg.name)        // "imageflow.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/imageflow-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const imageflowioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/imageflow.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'imageflow.io' as const,
  fullPath: 'imageflow.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx imageflow.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ImageflowioPackage = typeof imageflowioPackage
