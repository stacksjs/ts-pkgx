/**
 * **public.hronopik.de** - Go home.
 *
 * @domain `public.hronopik.de`
 *
 * @install `pkgx public.hronopik.de`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.publichronopikde
 * console.log(pkg.name)        // "public.hronopik.de"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/public-hronopik-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const publichronopikdePackage = {
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
  homepage: 'https://pkgx.dev/pkgs/public.hronopik.de/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'public.hronopik.de' as const,
  fullPath: 'public.hronopik.de' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx public.hronopik.de' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PublichronopikdePackage = typeof publichronopikdePackage
