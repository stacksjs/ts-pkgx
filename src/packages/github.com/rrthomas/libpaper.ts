/**
 * **paper** - Library and command-line tools for configuring and getting information on paper sizes
 *
 * @domain `github.com/rrthomas/libpaper`
 * @programs `paper`
 * @version `2.2.6` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install paper`
 * @aliases `paper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.paper
 * // Or access via domain
 * const samePkg = pantry.githubcomrrthomaslibpaper
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libpaper"
 * console.log(pkg.description) // "Library and command-line tools for configuring ..."
 * console.log(pkg.programs)    // ["paper"]
 * console.log(pkg.versions[0]) // "2.2.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rrthomas/libpaper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const paperPackage = {
  /**
   * The display name of this package.
   */
  name: 'libpaper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rrthomas/libpaper' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library and command-line tools for configuring and getting information on paper sizes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rrthomas/libpaper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install paper' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'paper',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.6',
    '2.2.5',
    '2.2.4',
    '2.2.3',
    '2.1.3',
    '2.1.2',
    '2.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'paper',
  ] as const,
}

export type PaperPackage = typeof paperPackage
