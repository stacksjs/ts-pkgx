/**
 * **xauth** - X.Org Applications: xauth
 *
 * @domain `x.org/xauth`
 * @programs `xauth`
 * @version `1.1.4` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xauth`
 * @name `xauth`
 * @dependencies `x.org/x11`, `x.org/exts`, `x.org/xau`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xauth
 * // Or access via domain
 * const samePkg = pantry.xorgxauth
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xauth"
 * console.log(pkg.description) // "X.Org Applications: xauth"
 * console.log(pkg.programs)    // ["xauth"]
 * console.log(pkg.versions[0]) // "1.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xauth.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xauthPackage = {
  /**
   * The display name of this package.
   */
  name: 'xauth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xauth' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'X.Org Applications: xauth' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xauth/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install xauth' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xauth',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
    'x.org/xau',
    'x.org/xmu',
    'x.org/xcb',
    'x.org/xdmcp',
    'freedesktop.org/pkg-config',
    'x.org/util-macros',
    'gnu.org/gcc',
    'gnu.org/make',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.4',
    '1.1.3',
    '1.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type XauthPackage = typeof xauthPackage
