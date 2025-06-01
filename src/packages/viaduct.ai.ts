/**
 * **viaduct.ai** - Go home.
 *
 * @domain `viaduct.ai`
 *
 * @install `pkgx viaduct.ai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.viaductai
 * console.log(pkg.name)        // "viaduct.ai"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/viaduct-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const viaductaiPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/viaduct.ai/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'viaduct.ai' as const,
  fullPath: 'viaduct.ai' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx viaduct.ai' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ViaductaiPackage = typeof viaductaiPackage
