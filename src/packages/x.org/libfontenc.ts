/**
 * **libfontenc** - pkgx package
 *
 * @domain `x.org/libfontenc`
 * @version `1.1.8` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/libfontenc -- $SHELL -i`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorglibfontenc
 * console.log(pkg.name)        // "libfontenc"
 * console.log(pkg.versions[0]) // "1.1.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libfontenc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorglibfontencPackage = {
  /**
   * The display name of this package.
   */
  name: 'libfontenc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libfontenc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libfontenc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +x.org/libfontenc -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/exts',
    'x.org/protocol',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.8',
  ] as const,
  aliases: [] as const,
}

export type XorglibfontencPackage = typeof xorglibfontencPackage
