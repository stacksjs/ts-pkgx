/**
 * **ninja** - Small build system for use with gyp or CMake
 *
 * @domain `ninja-build.org`
 * @programs `ninja`
 * @version `1.13.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ninja`
 * @aliases `ninja`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ninja
 * // Or access via domain
 * const samePkg = pantry.ninjabuildorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ninja-build.org"
 * console.log(pkg.description) // "Small build system for use with gyp or CMake"
 * console.log(pkg.programs)    // ["ninja"]
 * console.log(pkg.versions[0]) // "1.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ninja-build-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ninjaPackage = {
  /**
   * The display name of this package.
   */
  name: 'ninja-build.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ninja-build.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Small build system for use with gyp or CMake' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ninja-build.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ninja' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ninja',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.13.0',
    '1.12.1',
    '1.12.0',
    '1.11.1',
    '1.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ninja',
  ] as const,
}

export type NinjaPackage = typeof ninjaPackage
