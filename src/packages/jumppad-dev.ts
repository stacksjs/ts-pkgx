/**
 * **jumppad** - Modern cloud native development environments
 *
 * @domain `jumppad.dev`
 * @programs `jumppad`
 * @version `0.20.1` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) jumppad`
 * @name `jumppad`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jumppad
 * // Or access via domain
 * const samePkg = pantry.jumppaddev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jumppad"
 * console.log(pkg.description) // "Modern cloud native development environments"
 * console.log(pkg.programs)    // ["jumppad"]
 * console.log(pkg.versions[0]) // "0.20.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jumppad-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jumppadPackage = {
  /**
   * The display name of this package.
   */
  name: 'jumppad' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jumppad.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Modern cloud native development environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jumppad.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) jumppad' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jumppad',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.20.1',
    '0.20.0',
    '0.19.0',
    '0.18.1',
    '0.18.0',
    '0.17.1',
    '0.17.0',
    '0.16.1',
    '0.16.0',
    '0.15.0',
    '0.14.0',
    '0.13.3',
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.1',
    '0.12.0',
    '0.11.2',
    '0.11.1',
    '0.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'jumppad.dev' as const,
}

export type JumppadPackage = typeof jumppadPackage
