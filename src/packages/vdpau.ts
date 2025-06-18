/**
 * **vdpau** - pkgx package
 *
 * @domain `freedesktop.org/vdpau`
 * @version `1.5.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/vdpau.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/vdpau -- $SHELL -i`
 * @name `vdpau`
 * @dependencies `x.org/x11`, `x.org/exts`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vdpau
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgvdpau
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vdpau"
 * console.log(pkg.versions[0]) // "1.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/vdpau.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vdpauPackage = {
  /**
   * The display name of this package.
   */
  name: 'vdpau' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/vdpau' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/vdpau/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/vdpau -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'freedesktop.org/vdpau' as const,
}

export type VdpauPackage = typeof vdpauPackage
