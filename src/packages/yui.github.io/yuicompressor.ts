/**
 * **yuicompressor** - Package from pantry: yui.github.io/yuicompressor
 *
 * @domain `yui.github.io/yuicompressor`
 *
 * @install `launchpad install yui.github.io/yuicompressor`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yuigithubioyuicompressor
 * console.log(pkg.name)        // "yuicompressor"
 * console.log(pkg.description) // "Package from pantry: yui.github.io/yuicompressor"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yui-github-io/yuicompressor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yuigithubioyuicompressorPackage = {
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
  description: 'Package from pantry: yui.github.io/yuicompressor' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install yui.github.io/yuicompressor' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yui.github.io/yuicompressor/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type YuigithubioyuicompressorPackage = typeof yuigithubioyuicompressorPackage
