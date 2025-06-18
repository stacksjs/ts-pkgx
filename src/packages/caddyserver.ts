/**
 * **caddyserver** - pkgx package
 *
 * @domain `github.com/caddyserver`
 *
 * @install `pkgx github.com/caddyserver`
 * @name `caddyserver`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.caddyserver
 * // Or access via domain
 * const samePkg = pantry.githubcomcaddyserver
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "caddyserver"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caddyserver.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caddyserverPackage = {
  /**
   * The display name of this package.
   */
  name: 'caddyserver' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caddyserver' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/caddyserver' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/caddyserver' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/caddyserver' as const,
}

export type CaddyserverPackage = typeof caddyserverPackage
