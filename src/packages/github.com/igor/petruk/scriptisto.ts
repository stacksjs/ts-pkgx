/**
 * **github.com/igor-petruk/scriptisto** - pkgx package
 *
 * @domain `github.com/igor/petruk/scriptisto`
 *
 * @install `pkgx github.com/igor-petruk/scriptisto`
 * @aliases `github.com/igor-petruk/scriptisto`, `igor-petruk/scriptisto`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomigorpetrukscriptisto
 * // Or access via domain
 * const samePkg = pantry.githubcomigorpetrukscriptisto
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "igor-petruk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/igor/petruk/scriptisto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomigorpetrukscriptistoPackage = {
  /**
   * The display name of this package.
   */
  name: 'igor-petruk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/igor/petruk/scriptisto' as const,
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
  installCommand: 'pkgx github.com/igor-petruk/scriptisto' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/igor-petruk/scriptisto',
    'igor-petruk/scriptisto',
  ] as const,
  fullPath: 'github.com/igor-petruk/scriptisto' as const,
}

export type GithubcomigorpetrukscriptistoPackage = typeof githubcomigorpetrukscriptistoPackage
