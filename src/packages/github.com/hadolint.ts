/**
 * **hadolint** - pkgx package
 *
 * @domain `github.com/hadolint`
 *
 * @install `pkgx github.com/hadolint`
 * @name `hadolint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hadolint
 * // Or access via domain
 * const samePkg = pantry.githubcomhadolint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hadolint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hadolint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hadolintPackage = {
  /**
   * The display name of this package.
   */
  name: 'hadolint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hadolint' as const,
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
  installCommand: 'pkgx github.com/hadolint' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/hadolint' as const,
}

export type HadolintPackage = typeof hadolintPackage
