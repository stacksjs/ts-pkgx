/**
 * **freedesktop.org** - pkgx package
 *
 * @domain `freedesktop.org`
 *
 * @install `pkgx freedesktop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporg
 * console.log(pkg.name)        // "freedesktop.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org' as const,
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
  installCommand: 'pkgx freedesktop.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'freedesktop.org' as const,
}

export type FreedesktoporgPackage = typeof freedesktoporgPackage
