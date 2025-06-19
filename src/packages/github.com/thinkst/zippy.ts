/**
 * **zippy** - Detect AI-generated text [relatively] quickly via compression ratios
 *
 * @domain `github.com/thinkst/zippy`
 * @programs `zippy`
 * @version `0.1.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install zippy`
 * @name `zippy`
 * @dependencies `python.org~3.10`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zippy
 * // Or access via domain
 * const samePkg = pantry.githubcomthinkstzippy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zippy"
 * console.log(pkg.description) // "Detect AI-generated text [relatively] quickly v..."
 * console.log(pkg.programs)    // ["zippy"]
 * console.log(pkg.versions[0]) // "0.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thinkst/zippy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zippyPackage = {
  /**
   * The display name of this package.
   */
  name: 'zippy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thinkst/zippy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Detect AI-generated text [relatively] quickly via compression ratios' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thinkst/zippy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zippy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zippy',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.10',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.3',
    '0.1.2',
    '0.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ZippyPackage = typeof zippyPackage
