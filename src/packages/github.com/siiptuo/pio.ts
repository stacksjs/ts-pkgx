/**
 * **pio** - Your Gateway to Embedded Software Development Excellence :alien:
 *
 * @domain `github.com/siiptuo/pio`
 * @programs `pio`
 * @version `0.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pio`
 * @name `pio`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pio
 * // Or access via domain
 * const samePkg = pantry.githubcomsiiptuopio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pio"
 * console.log(pkg.description) // "Your Gateway to Embedded Software Development E..."
 * console.log(pkg.programs)    // ["pio"]
 * console.log(pkg.versions[0]) // "0.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/siiptuo/pio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/siiptuo/pio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Your Gateway to Embedded Software Development Excellence :alien:' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/siiptuo/pio/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pio' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pio',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PioPackage = typeof pioPackage
