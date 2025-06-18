/**
 * **github.com/benkehoe/aws-whoami-golang** - pkgx package
 *
 * @domain `github.com/benkehoe/aws/whoami-golang`
 *
 * @install `pkgx github.com/benkehoe/aws-whoami-golang`
 * @aliases `github.com/benkehoe/aws-whoami-golang`, `benkehoe/aws-whoami-golang`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcombenkehoeawswhoamigolang
 * // Or access via domain
 * const samePkg = pantry.githubcombenkehoeawswhoamigolang
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "benkehoe"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/benkehoe/aws/whoami-golang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombenkehoeawswhoamigolangPackage = {
  /**
   * The display name of this package.
   */
  name: 'benkehoe' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/benkehoe/aws/whoami-golang' as const,
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
  installCommand: 'pkgx github.com/benkehoe/aws-whoami-golang' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/benkehoe/aws-whoami-golang',
    'benkehoe/aws-whoami-golang',
  ] as const,
  fullPath: 'github.com/benkehoe/aws-whoami-golang' as const,
}

export type GithubcombenkehoeawswhoamigolangPackage = typeof githubcombenkehoeawswhoamigolangPackage
