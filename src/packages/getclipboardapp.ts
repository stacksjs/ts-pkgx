/**
 * **getclipboard.app** - Package from pantry: getclipboard.app
 *
 * @domain `getclipboard.app`
 *
 * @install `launchpad install getclipboard.app`
 * @dependencies `openssl.org^1.1`, `alsa-project.org/alsa-lib^1`, `x.org/x11^1`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getclipboardapp
 * console.log(pkg.name)        // "getclipboard.app"
 * console.log(pkg.description) // "Package from pantry: getclipboard.app"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getclipboard-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getclipboardappPackage = {
  /**
   * The display name of this package.
   */
  name: 'getclipboard.app' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getclipboard.app' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: getclipboard.app' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install getclipboard.app' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'alsa-project.org/alsa-lib^1',
    'x.org/x11^1',
    'wayland.freedesktop.org^1',
    'gnu.org/gcc/libstdcxx^14',
    'cmake.org^3',
    'wayland.freedesktop.org/protocols',
    'gnu.org/gcc^14',
    'gnu.org/diffutils',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getclipboard.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GetclipboardappPackage = typeof getclipboardappPackage
