/**
 * **tfutils** - pkgx package
 *
 * @domain `github.com/tfutils`
 *
 * @install `pkgx github.com/tfutils`
 * @name `tfutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tfutils
 * // Or access via domain
 * const samePkg = pantry.githubcomtfutils
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tfutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tfutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tfutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'tfutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tfutils' as const,
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
  installCommand: 'pkgx github.com/tfutils' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/tfutils' as const,
}

export type TfutilsPackage = typeof tfutilsPackage
