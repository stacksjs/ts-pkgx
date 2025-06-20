/**
 * **xplr** - A hackable, minimal, fast TUI file explorer
 *
 * @domain `xplr.dev`
 * @programs `xplr`
 * @version `1.0.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xplr`
 * @aliases `xplr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xplr
 * // Or access via domain
 * const samePkg = pantry.xplrdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xplr.dev"
 * console.log(pkg.description) // "A hackable, minimal, fast TUI file explorer"
 * console.log(pkg.programs)    // ["xplr"]
 * console.log(pkg.versions[0]) // "1.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xplr-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xplrPackage = {
  /**
   * The display name of this package.
   */
  name: 'xplr.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xplr.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A hackable, minimal, fast TUI file explorer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xplr.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xplr' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xplr',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.0',
    '0.21.10',
    '0.21.9',
    '0.21.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xplr',
  ] as const,
}

export type XplrPackage = typeof xplrPackage
