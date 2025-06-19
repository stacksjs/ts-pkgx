/**
 * **go-md2man** - Converts markdown into roff (man pages)
 *
 * @domain `github.com/cpuguy83/go-md2man`
 * @programs `go-md2man`
 * @version `2.0.7` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install go-md2man`
 * @name `go-md2man`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gomd2man
 * // Or access via domain
 * const samePkg = pantry.githubcomcpuguy83gomd2man
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "go-md2man"
 * console.log(pkg.description) // "Converts markdown into roff (man pages)"
 * console.log(pkg.programs)    // ["go-md2man"]
 * console.log(pkg.versions[0]) // "2.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cpuguy83/go-md2man.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gomd2manPackage = {
  /**
   * The display name of this package.
   */
  name: 'go-md2man' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cpuguy83/go-md2man' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Converts markdown into roff (man pages)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cpuguy83/go-md2man/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install go-md2man' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'go-md2man',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.7',
    '2.0.6',
    '2.0.5',
    '2.0.4',
    '2.0.3',
    '2.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type Gomd2manPackage = typeof gomd2manPackage
