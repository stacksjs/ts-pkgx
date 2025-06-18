/**
 * **wails** - Create beautiful applications using Go
 *
 * @domain `wails.io`
 * @programs `wails`
 * @version `2.10.1` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install wails`
 * @aliases `wails`
 * @dependencies `go.dev^1.18`, `npmjs.com`, `gnu.org/gcc`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.wails
 * // Or access via domain
 * const samePkg = pantry.wailsio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wails.io"
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
  name: 'wails.io' as const,
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
  installCommand: 'launchpad install wails' as const,
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
  aliases: [
    'wails',
  ] as const,
}

export type WailsPackage = typeof wailsPackage
