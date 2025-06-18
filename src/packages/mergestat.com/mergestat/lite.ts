/**
 * **mergestat.com/mergestat-lite** - pkgx package
 *
 * @domain `mergestat.com/mergestat/lite`
 *
 * @install `pkgx mergestat.com/mergestat-lite`
 * @name `mergestat-lite`
 * @aliases `mergestat.com/mergestat-lite`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mergestatcommergestatlite
 * // Or access via domain
 * const samePkg = pantry.mergestatcommergestatlite
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mergestat-lite"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mergestat-com/mergestat/lite.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mergestatcommergestatlitePackage = {
  /**
   * The display name of this package.
   */
  name: 'mergestat-lite' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mergestat.com/mergestat/lite' as const,
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
  installCommand: 'pkgx mergestat.com/mergestat-lite' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mergestat.com/mergestat-lite',
  ] as const,
  fullPath: 'mergestat.com/mergestat-lite' as const,
}

export type MergestatcommergestatlitePackage = typeof mergestatcommergestatlitePackage
