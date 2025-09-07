/**
 * **duf** - Disk Usage/Free Utility - a better 'df' alternative
 *
 * @domain `github.com/muesli/duf`
 * @programs `duf`
 * @version `0.9.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install duf`
 * @name `duf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.duf
 * // Or access via domain
 * const samePkg = pantry.githubcommuesliduf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "duf"
 * console.log(pkg.description) // "Disk Usage/Free Utility - a better 'df' alterna..."
 * console.log(pkg.programs)    // ["duf"]
 * console.log(pkg.versions[0]) // "0.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/muesli/duf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dufPackage = {
  /**
   * The display name of this package.
   */
  name: 'duf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/muesli/duf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Disk Usage/Free Utility - a better \'df\' alternative' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/muesli/duf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install duf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'duf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.0',
    '0.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) duf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install duf' as const,
}

export type DufPackage = typeof dufPackage
