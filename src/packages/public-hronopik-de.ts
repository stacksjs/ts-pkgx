/**
 * **public.hronopik.de** - pkgx package
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
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/public-hronopik-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const publichronopikdePackage = {
  /**
   * The display name of this package.
   */
  name: 'public.hronopik.de' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'public.hronopik.de' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx public.hronopik.de' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'public.hronopik.de' as const,
}

export type PublichronopikdePackage = typeof publichronopikdePackage
