/**
 * **github.com/go-acme/lego** - pkgx package
 *
 * @domain `github.com/go/acme/lego`
 *
 * @install `pkgx github.com/go-acme/lego`
 * @aliases `github.com/go-acme/lego`, `go-acme/lego`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomgoacmelego
 * // Or access via domain
 * const samePkg = pantry.githubcomgoacmelego
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "go-acme"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/go/acme/lego.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgoacmelegoPackage = {
  /**
   * The display name of this package.
   */
  name: 'go-acme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/go/acme/lego' as const,
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
  installCommand: 'pkgx github.com/go-acme/lego' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/go-acme/lego',
    'go-acme/lego',
  ] as const,
  fullPath: 'github.com/go-acme/lego' as const,
}

export type GithubcomgoacmelegoPackage = typeof githubcomgoacmelegoPackage
