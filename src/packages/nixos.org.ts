/**
 * **nixos.org** - Go home.
 *
 * @domain `nixos.org`
 *
 * @install `pkgx nixos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nixosorg
 * console.log(pkg.name)        // "nixos.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nixos-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nixosorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/nixos.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nixos.org' as const,
  fullPath: 'nixos.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nixos.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NixosorgPackage = typeof nixosorgPackage
