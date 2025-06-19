/**
 * **numbat** - A statically typed programming language for scientific computations with first class support for physical dimensions and units
 *
 * @domain `numbat.dev`
 * @programs `numbat`
 * @version `1.16.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install numbat`
 * @aliases `numbat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.numbat
 * // Or access via domain
 * const samePkg = pantry.numbatdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "numbat.dev"
 * console.log(pkg.description) // "A statically typed programming language for sci..."
 * console.log(pkg.programs)    // ["numbat"]
 * console.log(pkg.versions[0]) // "1.16.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/numbat-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const numbatPackage = {
  /**
   * The display name of this package.
   */
  name: 'numbat.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'numbat.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A statically typed programming language for scientific computations with first class support for physical dimensions and units' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/numbat.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install numbat' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'numbat',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.0',
    '1.15.0',
    '1.14.0',
    '1.13.0',
    '1.12.0',
    '1.11.0',
    '1.10.1',
    '1.10.0',
    '1.9.0',
    '1.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'numbat',
  ] as const,
}

export type NumbatPackage = typeof numbatPackage
