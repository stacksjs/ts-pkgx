/**
 * **denilson.sa.nom.br** - Go home.
 *
 * @domain `denilson.sa.nom.br`
 *
 * @install `pkgx denilson.sa.nom.br`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.denilsonsanombr
 * console.log(pkg.name)        // "denilson.sa.nom.br"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/denilson-sa-nom-br.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const denilsonsanombrPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/denilson.sa.nom.br/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'denilson.sa.nom.br' as const,
  fullPath: 'denilson.sa.nom.br' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx denilson.sa.nom.br' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DenilsonsanombrPackage = typeof denilsonsanombrPackage
