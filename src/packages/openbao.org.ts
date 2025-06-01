/**
 * **openbao.org** - Go home.
 *
 * @domain `openbao.org`
 *
 * @install `pkgx openbao.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openbaoorg
 * console.log(pkg.name)        // "openbao.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openbao-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openbaoorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/openbao.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openbao.org' as const,
  fullPath: 'openbao.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openbao.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenbaoorgPackage = typeof openbaoorgPackage
