/**
 * **viaduct.ai-ksops** - Go home.
 *
 * @domain `viaduct.ai-ksops`
 *
 * @install `pkgx viaduct.ai-ksops`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.viaductaiksops
 * console.log(pkg.name)        // "viaduct.ai-ksops"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/viaduct-ai-ksops.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const viaductaiksopsPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/viaduct.ai-ksops/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'viaduct.ai-ksops' as const,
  fullPath: 'viaduct.ai-ksops' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx viaduct.ai-ksops' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ViaductaiksopsPackage = typeof viaductaiksopsPackage
