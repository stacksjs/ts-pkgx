/**
 * **gpg-public.asc** - pkgx package
 *
 * @domain `gpg-public.asc`
 *
 * @install `pkgx gpg-public.asc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gpgpublicasc
 * console.log(pkg.name)        // "gpg-public.asc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gpg-public-asc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gpgpublicascPackage = {
  /**
   * The display name of this package.
   */
  name: 'gpg-public.asc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gpg-public.asc' as const,
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
  installCommand: 'pkgx gpg-public.asc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'gpg-public.asc' as const,
}

export type GpgpublicascPackage = typeof gpgpublicascPackage
