/**
 * **bytereef.org** - Go home.
 *
 * @domain `bytereef.org`
 *
 * @install `pkgx bytereef.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bytereeforg
 * console.log(pkg.name)        // "bytereef.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bytereef-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bytereeforgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/bytereef.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bytereef.org' as const,
  fullPath: 'bytereef.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bytereef.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BytereeforgPackage = typeof bytereeforgPackage
