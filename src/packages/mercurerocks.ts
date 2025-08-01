/**
 * **mercure** - 🪽 An open, easy, fast, reliable and battery-efficient solution for real-time communications
 *
 * @domain `mercure.rocks`
 * @programs `mercure`
 * @version `0.20.0` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mercure`
 * @name `mercure`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mercure
 * // Or access via domain
 * const samePkg = pantry.mercurerocks
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mercure"
 * console.log(pkg.description) // "🪽 An open, easy, fast, reliable and battery-ef..."
 * console.log(pkg.programs)    // ["mercure"]
 * console.log(pkg.versions[0]) // "0.20.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mercure-rocks.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mercurePackage = {
  /**
   * The display name of this package.
   */
  name: 'mercure' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mercure.rocks' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🪽 An open, easy, fast, reliable and battery-efficient solution for real-time communications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mercure.rocks/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/dunglas/mercure' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mercure' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mercure',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.20.0',
    '0.19.3',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.4',
    '0.18.3',
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.1',
    '0.17.0',
    '0.16.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mercure -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mercure' as const,
}

export type MercurePackage = typeof mercurePackage
