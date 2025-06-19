/**
 * **air** - ☁️ Live reload for Go apps
 *
 * @domain `github.com/cosmtrek/air`
 * @programs `air`
 * @version `1.62.0` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install air`
 * @name `air`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.air
 * // Or access via domain
 * const samePkg = pantry.githubcomcosmtrekair
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "air"
 * console.log(pkg.description) // "☁️ Live reload for Go apps"
 * console.log(pkg.programs)    // ["air"]
 * console.log(pkg.versions[0]) // "1.62.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cosmtrek/air.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const airPackage = {
  /**
   * The display name of this package.
   */
  name: 'air' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cosmtrek/air' as const,
  /**
   * Brief description of what this package does.
   */
  description: '☁️ Live reload for Go apps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cosmtrek/air/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install air' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'air',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.62.0',
    '1.61.7',
    '1.61.6',
    '1.61.5',
    '1.61.4',
    '1.61.3',
    '1.61.1',
    '1.61.0',
    '1.60.0',
    '1.52.3',
    '1.52.2',
    '1.52.1',
    '1.52.0',
    '1.51.0',
    '1.50.0',
    '1.49.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type AirPackage = typeof airPackage
