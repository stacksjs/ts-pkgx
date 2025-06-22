/**
 * **amber** - Crystal web framework. Bare metal performance, productivity and happiness
 *
 * @domain `amber-lang.com`
 * @programs `amber`
 * @version `0.4.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install amber`
 * @name `amber`
 * @companions `gnu.org/bc`, `gnu.org/sed`, `gnu.org/coreutils`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.amber
 * // Or access via domain
 * const samePkg = pantry.amberlangcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "amber"
 * console.log(pkg.description) // "Crystal web framework. Bare metal performance, ..."
 * console.log(pkg.programs)    // ["amber"]
 * console.log(pkg.versions[0]) // "0.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amber-lang-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const amberPackage = {
  /**
   * The display name of this package.
   */
  name: 'amber' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amber-lang.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crystal web framework. Bare metal performance, productivity and happiness' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/amber-lang.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install amber' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'amber',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'gnu.org/bc',
    'gnu.org/sed',
    'gnu.org/coreutils',
    'gnu.org/gawk',
    'gnu.org/bash',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.0',
    '0.3.5',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) amber -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install amber' as const,
}

export type AmberPackage = typeof amberPackage
