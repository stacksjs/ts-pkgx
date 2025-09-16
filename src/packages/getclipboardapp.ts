/**
 * **getclipboard.app** - pkgx package
 *
 * @domain `getclipboard.app`
 * @version `0.9.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install getclipboard.app`
 * @dependencies `openssl.org^1.1`, `linux:alsa-project.org/alsa-lib@1`, `linux:x.org/x11@1`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getclipboardapp
 * console.log(pkg.name)        // "getclipboard.app"
 * console.log(pkg.versions[0]) // "0.9.1" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getclipboard.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install getclipboard.app' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org^1.1',
    'linux:alsa-project.org/alsa-lib@1',
    'linux:x.org/x11@1',
    'linux:wayland.freedesktop.org@1',
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.1',
    '0.9.0.1',
    '0.10.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +getclipboard.app -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install getclipboard.app' as const,
}

export type GetclipboardappPackage = typeof getclipboardappPackage
