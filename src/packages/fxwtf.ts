/**
 * **fx** - Terminal JSON viewer & processor
 *
 * @domain `fx.wtf`
 * @programs `fx`
 * @version `36.0.4` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fx`
 * @aliases `fx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fx
 * // Or access via domain
 * const samePkg = pantry.fxwtf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fx.wtf"
 * console.log(pkg.description) // "Terminal JSON viewer & processor"
 * console.log(pkg.programs)    // ["fx"]
 * console.log(pkg.versions[0]) // "36.0.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fx-wtf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fxPackage = {
  /**
   * The display name of this package.
   */
  name: 'fx.wtf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fx.wtf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terminal JSON viewer & processor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fx.wtf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fx',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '36.0.4',
    '36.0.3',
    '36.0.2',
    '36.0.1',
    '36.0.0',
    '35.0.0',
    '34.0.0',
    '33.0.0',
    '32.0.0',
    '31.0.0',
    '30.2.0',
    '30.1.1',
    '30.1.0',
    '30.0.3',
    '30.0.2',
    '30.0.1',
    '30.0.0',
    '24.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fx',
  ] as const,
}

export type FxPackage = typeof fxPackage
