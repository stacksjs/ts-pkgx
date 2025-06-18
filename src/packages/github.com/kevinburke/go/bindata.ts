/**
 * **github.com/kevinburke/go-bindata** - pkgx package
 *
 * @domain `github.com/kevinburke/go/bindata`
 *
 * @install `pkgx github.com/kevinburke/go-bindata`
 * @aliases `github.com/kevinburke/go-bindata`, `kevinburke/go-bindata`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomkevinburkegobindata
 * // Or access via domain
 * const samePkg = pantry.githubcomkevinburkegobindata
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kevinburke"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kevinburke/go/bindata.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkevinburkegobindataPackage = {
  /**
   * The display name of this package.
   */
  name: 'kevinburke' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kevinburke/go/bindata' as const,
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
  installCommand: 'pkgx github.com/kevinburke/go-bindata' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/kevinburke/go-bindata',
    'kevinburke/go-bindata',
  ] as const,
  fullPath: 'github.com/kevinburke/go-bindata' as const,
}

export type GithubcomkevinburkegobindataPackage = typeof githubcomkevinburkegobindataPackage
