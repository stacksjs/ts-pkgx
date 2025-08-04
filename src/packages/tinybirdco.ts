/**
 * **tb** - pkgx package
 *
 * @domain `tinybird.co`
 * @programs `tb`
 * @version `5.21.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tb`
 * @name `tb`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tb
 * // Or access via domain
 * const samePkg = pantry.tinybirdco
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tb"
 * console.log(pkg.programs)    // ["tb"]
 * console.log(pkg.versions[0]) // "5.21.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tinybird-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tbPackage = {
  /**
   * The display name of this package.
   */
  name: 'tb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tinybird.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tinybird.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tb' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tb',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.21.1',
    '5.21.0',
    '5.20.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) tb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tb' as const,
}

export type TbPackage = typeof tbPackage
