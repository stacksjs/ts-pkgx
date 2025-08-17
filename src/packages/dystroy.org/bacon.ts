/**
 * **bacon** - Background rust code check
 *
 * @domain `dystroy.org/bacon`
 * @programs `bacon`
 * @version `3.17.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bacon`
 * @name `bacon`
 * @dependencies `linux:alsa-project.org/alsa-lib` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bacon
 * // Or access via domain
 * const samePkg = pantry.dystroyorgbacon
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bacon"
 * console.log(pkg.description) // "Background rust code check"
 * console.log(pkg.programs)    // ["bacon"]
 * console.log(pkg.versions[0]) // "3.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dystroy-org/bacon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const baconPackage = {
  /**
   * The display name of this package.
   */
  name: 'bacon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dystroy.org/bacon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Background rust code check' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dystroy.org/bacon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bacon' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bacon',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:alsa-project.org/alsa-lib',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.17.0',
    '3.16.0',
    '3.15.0',
    '3.14.0',
    '3.13.0',
    '3.12.0',
    '3.11.0',
    '3.10.0',
    '3.9.1',
    '3.9.0',
    '3.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) bacon -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bacon' as const,
}

export type BaconPackage = typeof baconPackage
