/**
 * **xiph.org** - Go home.
 *
 * @domain `xiph.org`
 *
 * @install `pkgx xiph.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xiphorg
 * console.log(pkg.name)        // "xiph.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xiph-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xiphorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/xiph.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xiph.org' as const,
  fullPath: 'xiph.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx xiph.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XiphorgPackage = typeof xiphorgPackage
