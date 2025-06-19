/**
 * **xkbcli** - keymap handling library for toolkits and window systems
 *
 * @domain `xkbcommon.org`
 * @programs `xkbcli`
 * @version `1.10.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xkbcli`
 * @aliases `xkbcli`
 * @dependencies `x.org/x11`, `x.org/xcb`, `freedesktop.org/XKeyboardConfig`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xkbcli
 * // Or access via domain
 * const samePkg = pantry.xkbcommonorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xkbcommon.org"
 * console.log(pkg.description) // "keymap handling library for toolkits and window..."
 * console.log(pkg.programs)    // ["xkbcli"]
 * console.log(pkg.versions[0]) // "1.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xkbcommon-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xkbcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'xkbcommon.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xkbcommon.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'keymap handling library for toolkits and window systems' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xkbcommon.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install xkbcli' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xkbcli',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/xcb',
    'freedesktop.org/XKeyboardConfig',
    'gnome.org/libxml2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.0',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.1',
    '1.8.0',
    '1.7.0',
    '1.6.0',
    '1.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xkbcli',
  ] as const,
}

export type XkbcliPackage = typeof xkbcliPackage
