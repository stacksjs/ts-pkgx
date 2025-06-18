/**
 * **xinput** - Utility to configure and test X input devices
 *
 * @domain `x.org/xinput`
 * @programs `xinput`
 * @version `1.6.4` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xinput.md
 *
 * @install `sh <(curl https://pkgx.sh) xinput`
 * @name `xinput`
 * @dependencies `x.org/x11`, `x.org/exts`, `x.org/xi`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xinput
 * // Or access via domain
 * const samePkg = pantry.xorgxinput
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xinput"
 * console.log(pkg.description) // "Utility to configure and test X input devices"
 * console.log(pkg.programs)    // ["xinput"]
 * console.log(pkg.versions[0]) // "1.6.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xinput.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xinputPackage = {
  /**
   * The display name of this package.
   */
  name: 'xinput' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xinput' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Utility to configure and test X input devices' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xinput/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) xinput' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xinput',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
    'x.org/xi',
    'x.org/xinerama',
    'x.org/xrandr',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'x.org/xinput' as const,
}

export type XinputPackage = typeof xinputPackage
