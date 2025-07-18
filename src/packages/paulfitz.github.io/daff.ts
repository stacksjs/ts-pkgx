/**
 * **daff** - align and compare tables
 *
 * @domain `paulfitz.github.io/daff`
 * @programs `daff`
 * @version `1.4.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install daff`
 * @name `daff`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.daff
 * // Or access via domain
 * const samePkg = pantry.paulfitzgithubiodaff
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "daff"
 * console.log(pkg.description) // "align and compare tables"
 * console.log(pkg.programs)    // ["daff"]
 * console.log(pkg.versions[0]) // "1.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/paulfitz-github-io/daff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daffPackage = {
  /**
   * The display name of this package.
   */
  name: 'daff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'paulfitz.github.io/daff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'align and compare tables' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/paulfitz.github.io/daff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install daff' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'daff',
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
    '1.4.2',
    '1.3.46',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) daff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install daff' as const,
}

export type DaffPackage = typeof daffPackage
