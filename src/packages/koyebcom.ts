/**
 * **koyeb** - Koyeb cli
 *
 * @domain `koyeb.com`
 * @programs `koyeb`
 * @version `5.7.0` (38 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install koyeb`
 * @name `koyeb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.koyeb
 * // Or access via domain
 * const samePkg = pantry.koyebcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "koyeb"
 * console.log(pkg.description) // "Koyeb cli"
 * console.log(pkg.programs)    // ["koyeb"]
 * console.log(pkg.versions[0]) // "5.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/koyeb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const koyebPackage = {
  /**
   * The display name of this package.
   */
  name: 'koyeb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'koyeb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Koyeb cli' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/koyeb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install koyeb' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'koyeb',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.7.0',
    '5.6.0',
    '5.5.1',
    '5.5.0',
    '5.4.3',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.3.2',
    '5.3.1',
    '5.3.0',
    '5.2.0',
    '5.1.0',
    '5.0.0',
    '4.3.0',
    '4.2.0',
    '4.1.2',
    '4.0.0',
    '3.12.0',
    '3.11.0',
    '3.10.0',
    '3.9.0',
    '3.8.1',
    '3.7.1',
    '3.7.0',
    '3.6.1',
    '3.6.0',
    '3.5.2',
    '3.5.1',
    '3.4.0',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.1',
    '3.1.0',
    '3.0.2',
    '3.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) koyeb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install koyeb' as const,
}

export type KoyebPackage = typeof koyebPackage
