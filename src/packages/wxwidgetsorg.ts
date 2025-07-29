/**
 * **wxwidgets.org** - Package from pantry: wxwidgets.org
 *
 * @domain `wxwidgets.org`
 *
 * @install `launchpad install wxwidgets.org`
 * @dependencies `libjpeg-turbo.org`, `libpng.org`, `simplesystems.org/libtiff`, ... (+6 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wxwidgetsorg
 * console.log(pkg.name)        // "wxwidgets.org"
 * console.log(pkg.description) // "Package from pantry: wxwidgets.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wxwidgets-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wxwidgetsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'wxwidgets.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wxwidgets.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wxwidgets.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wxwidgets.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +wxwidgets.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install wxwidgets.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libjpeg-turbo.org',
    'libpng.org',
    'simplesystems.org/libtiff',
    'pcre.org/v2',
    'libexpat.github.io',
    'zlib.net',
    'linux:x.org/sm',
    'linux:freedesktop.org/mesa-glu',
    'linux:gtk.org/gtk3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wxwidgets.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WxwidgetsorgPackage = typeof wxwidgetsorgPackage
