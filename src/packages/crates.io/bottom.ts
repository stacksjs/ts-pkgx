/**
 * **btm** - Yet another cross-platform graphical process/system monitor.
 *
 * @domain `crates.io/bottom`
 * @programs `btm`
 * @version `0.10.2` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install btm`
 * @aliases `btm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.btm
 * // Or access via domain
 * const samePkg = pantry.cratesiobottom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bottom"
 * console.log(pkg.description) // "Yet another cross-platform graphical process/sy..."
 * console.log(pkg.programs)    // ["btm"]
 * console.log(pkg.versions[0]) // "0.10.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bottom.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const btmPackage = {
  /**
   * The display name of this package.
   */
  name: 'bottom' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bottom' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Yet another cross-platform graphical process/system monitor.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bottom/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install btm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'btm',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.7',
    '0.9.6',
    '0.9.5',
    '0.9.4',
    '0.9.3',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'btm',
  ] as const,
}

export type BtmPackage = typeof btmPackage
