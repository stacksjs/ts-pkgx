/**
 * **gdu** - Fast disk usage analyzer with console interface written in Go
 *
 * @domain `github.com/dundee/gdu`
 * @programs `gdu`
 * @version `5.31.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gdu`
 * @name `gdu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gdu
 * // Or access via domain
 * const samePkg = pantry.githubcomdundeegdu
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gdu"
 * console.log(pkg.description) // "Fast disk usage analyzer with console interface..."
 * console.log(pkg.programs)    // ["gdu"]
 * console.log(pkg.versions[0]) // "5.31.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dundee/gdu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gduPackage = {
  /**
   * The display name of this package.
   */
  name: 'gdu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dundee/gdu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast disk usage analyzer with console interface written in Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dundee/gdu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gdu' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gdu',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.31.0',
    '5.30.1',
    '5.30.0',
    '5.29.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) gdu -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gdu' as const,
}

export type GduPackage = typeof gduPackage
