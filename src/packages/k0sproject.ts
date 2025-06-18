/**
 * **k0sproject** - pkgx package
 *
 * @domain `github.com/k0sproject`
 *
 * @install `pkgx github.com/k0sproject`
 * @name `k0sproject`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.k0sproject
 * // Or access via domain
 * const samePkg = pantry.githubcomk0sproject
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "k0sproject"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/k0sproject.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k0sprojectPackage = {
  /**
   * The display name of this package.
   */
  name: 'k0sproject' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/k0sproject' as const,
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
  installCommand: 'pkgx github.com/k0sproject' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/k0sproject' as const,
}

export type K0sprojectPackage = typeof k0sprojectPackage
