/**
 * **par2** - Parchive: Parity Archive Volume Set for data recovery
 *
 * @domain `github.com/Parchive/par2cmdline`
 * @programs `par2`, `par2create`, `par2verify`, `par2repair`
 * @version `1.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/Parchive/par2cmdline -- $SHELL -i`
 * @aliases `par2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.par2
 * // Or access via domain
 * const samePkg = pantry.githubcomparchivepar2cmdline
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "par2cmdline"
 * console.log(pkg.description) // "Parchive: Parity Archive Volume Set for data re..."
 * console.log(pkg.programs)    // ["par2", "par2create", ...]
 * console.log(pkg.versions[0]) // "1.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Parchive/par2cmdline.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const par2Package = {
  /**
   * The display name of this package.
   */
  name: 'par2cmdline' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Parchive/par2cmdline' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Parchive: Parity Archive Volume Set for data recovery' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Parchive/par2cmdline/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/Parchive/par2cmdline -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'par2',
    'par2create',
    'par2verify',
    'par2repair',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.0',
    '0.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'par2',
  ] as const,
}

export type Par2Package = typeof par2Package
