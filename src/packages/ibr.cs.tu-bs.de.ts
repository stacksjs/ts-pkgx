/**
 * **ibr.cs.tu-bs.de** - Go home.
 *
 * @domain `ibr.cs.tu-bs.de`
 *
 * @install `pkgx ibr.cs.tu-bs.de`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ibrcstubsde
 * console.log(pkg.name)        // "ibr.cs.tu-bs.de"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ibr-cs-tu-bs-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ibrcstubsdePackage = {
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
  homepage: 'https://pkgx.dev/pkgs/ibr.cs.tu-bs.de/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ibr.cs.tu-bs.de' as const,
  fullPath: 'ibr.cs.tu-bs.de' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ibr.cs.tu-bs.de' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IbrcstubsdePackage = typeof ibrcstubsdePackage
