/**
 * **rigaux.org** - Go home.
 *
 * @domain `rigaux.org`
 *
 * @install `pkgx rigaux.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rigauxorg
 * console.log(pkg.name)        // "rigaux.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rigaux-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rigauxorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/rigaux.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rigaux.org' as const,
  fullPath: 'rigaux.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rigaux.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RigauxorgPackage = typeof rigauxorgPackage
