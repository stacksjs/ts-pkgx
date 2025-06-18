/**
 * **wails** - Create beautiful applications using Go
 *
 * @domain `wails.io`
 * @programs `wails`
 * @version `2.10.1` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) wails`
 * @name `wails`
 * @dependencies `go.dev^1.18`, `npmjs.com`, `linuxgnu.org/gccgtk.org/gtk3freedesktop.org/pkg-config`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.wails
 * // Or access via domain
 * const samePkg = pantry.wailsio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wails"
 * console.log(pkg.description) // "Create beautiful applications using Go"
 * console.log(pkg.programs)    // ["wails"]
 * console.log(pkg.versions[0]) // "2.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wails-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wailsPackage = {
  /**
   * The display name of this package.
   */
  name: 'wails' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wails.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Create beautiful applications using Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wails.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) wails' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wails',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
    'npmjs.com',
    'linuxgnu.org/gccgtk.org/gtk3freedesktop.org/pkg-config',
    'gnu.org/gcc',
    'gtk.org/gtk3',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.10.1',
    '2.10.0',
    '2.9.3',
    '2.9.2',
    '2.9.1',
    '2.9.0',
    '2.8.2',
    '2.8.1',
    '2.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'wails.io' as const,
}

export type WailsPackage = typeof wailsPackage
