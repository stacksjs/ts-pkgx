/**
 * **pimalaya.org** - Go home.
 *
 * @domain `pimalaya.org`
 *
 * @install `pkgx pimalaya.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pimalayaorg
 * console.log(pkg.name)        // "pimalaya.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pimalaya-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pimalayaorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/pimalaya.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pimalaya.org' as const,
  fullPath: 'pimalaya.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pimalaya.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PimalayaorgPackage = typeof pimalayaorgPackage
