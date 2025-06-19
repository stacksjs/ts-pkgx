/**
 * **yuicompressor** - Yahoo! JavaScript and CSS compressor
 *
 * @domain `yui.github.io/yuicompressor`
 * @programs `yuicompressor`
 * @version `2.4.8` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install yuicompressor`
 * @name `yuicompressor`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yuicompressor
 * // Or access via domain
 * const samePkg = pantry.yuigithubioyuicompressor
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yuicompressor"
 * console.log(pkg.description) // "Yahoo! JavaScript and CSS compressor"
 * console.log(pkg.programs)    // ["yuicompressor"]
 * console.log(pkg.versions[0]) // "2.4.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yui-github-io/yuicompressor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yuicompressorPackage = {
  /**
   * The display name of this package.
   */
  name: 'yuicompressor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yui.github.io/yuicompressor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Yahoo! JavaScript and CSS compressor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yui.github.io/yuicompressor/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install yuicompressor' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yuicompressor',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type YuicompressorPackage = typeof yuicompressorPackage
