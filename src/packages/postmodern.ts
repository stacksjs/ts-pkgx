/**
 * **postmodern** - pkgx package
 *
 * @domain `github.com/postmodern`
 *
 * @install `pkgx github.com/postmodern`
 * @name `postmodern`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.postmodern
 * // Or access via domain
 * const samePkg = pantry.githubcompostmodern
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "postmodern"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/postmodern.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const postmodernPackage = {
  /**
   * The display name of this package.
   */
  name: 'postmodern' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/postmodern' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/postmodern' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/postmodern' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/postmodern' as const,
}

export type PostmodernPackage = typeof postmodernPackage
