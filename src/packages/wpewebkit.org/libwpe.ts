/**
 * **libwpe** - General-purpose library specifically developed for the WPE-flavored port of WebKit.
 *
 * @domain `wpewebkit.org/libwpe`
 * @version `1.16.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +wpewebkit.org/libwpe -- $SHELL -i`
 * @dependencies `xkbcommon.org`, `mesa3d.org`, `gnu.org/gcc`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wpewebkitorglibwpe
 * console.log(pkg.name)        // "libwpe"
 * console.log(pkg.description) // "General-purpose library specifically developed ..."
 * console.log(pkg.versions[0]) // "1.16.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wpewebkit-org/libwpe.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wpewebkitorglibwpePackage = {
  /**
   * The display name of this package.
   */
  name: 'libwpe' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wpewebkit.org/libwpe' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'General-purpose library specifically developed for the WPE-flavored port of WebKit.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wpewebkit.org/libwpe/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +wpewebkit.org/libwpe -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xkbcommon.org',
    'mesa3d.org',
    'gnu.org/gcc',
    'mesonbuild.com',
    'ninja-build.org',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.2',
    '1.16.1',
    '1.16.0',
    '1.15.2',
    '1.15.1',
  ] as const,
  aliases: [] as const,
}

export type WpewebkitorglibwpePackage = typeof wpewebkitorglibwpePackage
