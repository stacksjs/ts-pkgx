/**
 * **libvpx** - Mirror only. Please do not send pull requests.
 *
 * @domain `webmproject.org/libvpx`
 * @version `1.15.2` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +webmproject.org/libvpx -- $SHELL -i`
 * @aliases `libvpx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libvpx
 * // Or access via domain
 * const samePkg = pantry.webmprojectorglibvpx
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "webmproject.org/libvpx"
 * console.log(pkg.description) // "Mirror only. Please do not send pull requests."
 * console.log(pkg.versions[0]) // "1.15.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/webmproject-org/libvpx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libvpxPackage = {
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +webmproject.org/libvpx -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libvpx',
  ] as const,
  fullPath: 'webmproject.org/libvpx' as const,
}

export type LibvpxPackage = typeof libvpxPackage
