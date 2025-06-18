/**
 * **blacktop** - pkgx package
 *
 * @domain `github.com/blacktop`
 *
 * @install `pkgx github.com/blacktop`
 * @name `blacktop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.blacktop
 * // Or access via domain
 * const samePkg = pantry.githubcomblacktop
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "blacktop"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/blacktop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const blacktopPackage = {
  /**
   * The display name of this package.
   */
  name: 'blacktop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/blacktop' as const,
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
  installCommand: 'pkgx github.com/blacktop' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/blacktop' as const,
}

export type BlacktopPackage = typeof blacktopPackage
