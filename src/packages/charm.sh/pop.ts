/**
 * **pop** - Send emails from your terminal 📬
 *
 * @domain `charm.sh/pop`
 * @programs `pop`
 * @version `0.2.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pop`
 * @name `pop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pop
 * // Or access via domain
 * const samePkg = pantry.charmshpop
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pop"
 * console.log(pkg.description) // "Send emails from your terminal 📬"
 * console.log(pkg.programs)    // ["pop"]
 * console.log(pkg.versions[0]) // "0.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/pop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popPackage = {
  /**
   * The display name of this package.
   */
  name: 'pop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/pop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Send emails from your terminal 📬' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/pop/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pop' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pop',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.0',
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PopPackage = typeof popPackage
