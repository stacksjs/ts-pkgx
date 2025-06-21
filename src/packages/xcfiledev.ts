/**
 * **xc** - Markdown defined task runner.
 *
 * @domain `xcfile.dev`
 * @programs `xc`
 * @version `0.8.5` (27 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xc`
 * @aliases `xc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xc
 * // Or access via domain
 * const samePkg = pantry.xcfiledev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcfile.dev"
 * console.log(pkg.description) // "Markdown defined task runner."
 * console.log(pkg.programs)    // ["xc"]
 * console.log(pkg.versions[0]) // "0.8.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xcfile-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcfile.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xcfile.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Markdown defined task runner.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xcfile.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.5',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.0',
    '0.6.0',
    '0.5.0',
    '0.4.1',
    '0.4.0',
    '0.3.0',
    '0.2.0',
    '0.1.181',
    '0.1.180',
    '0.0.180',
    '0.0.175',
    '0.0.169',
    '0.0.159',
    '0.0.154',
    '0.0.152',
    '0.0.148',
    '0.0.146',
    '0.0.144',
    '0.0.142',
    '0.0.111',
    '0.0.110',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xc',
  ] as const,
}

export type XcPackage = typeof xcPackage
