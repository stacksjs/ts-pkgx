/**
 * **ekzhang** - pkgx package
 *
 * @domain `github.com/ekzhang`
 *
 * @install `pkgx github.com/ekzhang`
 * @name `ekzhang`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ekzhang
 * // Or access via domain
 * const samePkg = pantry.githubcomekzhang
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ekzhang"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ekzhang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ekzhangPackage = {
  /**
   * The display name of this package.
   */
  name: 'ekzhang' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ekzhang' as const,
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
  installCommand: 'pkgx github.com/ekzhang' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ekzhang' as const,
}

export type EkzhangPackage = typeof ekzhangPackage
