/**
 * **stub42** - pkgx package
 *
 * @domain `github.com/stub42`
 *
 * @install `pkgx github.com/stub42`
 * @name `stub42`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.stub42
 * // Or access via domain
 * const samePkg = pantry.githubcomstub42
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "stub42"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/stub42.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stub42Package = {
  /**
   * The display name of this package.
   */
  name: 'stub42' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/stub42' as const,
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
  installCommand: 'pkgx github.com/stub42' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/stub42' as const,
}

export type Stub42Package = typeof stub42Package
