/**
 * **virtualsquare.org** - pkgx package
 *
 * @domain `virtualsquare.org`
 *
 * @install `pkgx virtualsquare.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.virtualsquareorg
 * console.log(pkg.name)        // "virtualsquare.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/virtualsquare-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const virtualsquareorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'virtualsquare.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'virtualsquare.org' as const,
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
  installCommand: 'pkgx virtualsquare.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'virtualsquare.org' as const,
}

export type VirtualsquareorgPackage = typeof virtualsquareorgPackage
