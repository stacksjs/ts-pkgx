/**
 * **lporg** - Organize Your macOS Launchpad Apps
 *
 * @domain `github.com/blacktop/lporg`
 * @programs `lporg`
 * @version `20.4.32` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) lporg`
 * @name `lporg`
 * @aliases `blacktop/lporg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lporg
 * // Or access via domain
 * const samePkg = pantry.githubcomblacktoplporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lporg"
 * console.log(pkg.description) // "Organize Your macOS Launchpad Apps"
 * console.log(pkg.programs)    // ["lporg"]
 * console.log(pkg.versions[0]) // "20.4.32" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/blacktop/lporg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lporg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/blacktop/lporg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Organize Your macOS Launchpad Apps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/blacktop/lporg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) lporg' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lporg',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20.4.32',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'blacktop/lporg',
  ] as const,
  fullPath: 'github.com/blacktop/lporg' as const,
}

export type LporgPackage = typeof lporgPackage
