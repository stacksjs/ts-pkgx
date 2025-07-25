/**
 * **duk** - Duktape - embeddable Javascript engine with a focus on portability and compact footprint
 *
 * @domain `duktape.org`
 * @programs `duk`
 * @version `2.7.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install duk`
 * @name `duk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.duk
 * // Or access via domain
 * const samePkg = pantry.duktapeorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "duk"
 * console.log(pkg.description) // "Duktape - embeddable Javascript engine with a f..."
 * console.log(pkg.programs)    // ["duk"]
 * console.log(pkg.versions[0]) // "2.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/duktape-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dukPackage = {
  /**
   * The display name of this package.
   */
  name: 'duk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'duktape.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Duktape - embeddable Javascript engine with a focus on portability and compact footprint' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/duktape.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install duk' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'duk',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) duk -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install duk' as const,
}

export type DukPackage = typeof dukPackage
