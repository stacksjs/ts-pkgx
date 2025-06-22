/**
 * **webmproject.org/libvpx** - Mirror only. Please do not send pull requests.
 *
 * @domain `webmproject.org/libvpx`
 * @version `1.15.2` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install webmproject.org/libvpx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.webmprojectorglibvpx
 * console.log(pkg.name)        // "webmproject.org/libvpx"
 * console.log(pkg.description) // "Mirror only. Please do not send pull requests."
 * console.log(pkg.versions[0]) // "1.15.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/webmproject-org/libvpx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const webmprojectorglibvpxPackage = {
  /**
   * The display name of this package.
   */
  name: 'webmproject.org/libvpx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'webmproject.org/libvpx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mirror only. Please do not send pull requests.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/webmproject.org/libvpx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install webmproject.org/libvpx' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.15.2',
    '1.15.1',
    '1.15.0',
    '1.14.1',
    '1.14.0',
    '1.13.1',
    '1.13.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +webmproject.org/libvpx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install webmproject.org/libvpx' as const,
}

export type WebmprojectorglibvpxPackage = typeof webmprojectorglibvpxPackage
