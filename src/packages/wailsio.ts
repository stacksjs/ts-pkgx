/**
 * **wails.io** - Package from pantry: wails.io
 *
 * @domain `wails.io`
 *
 * @install `launchpad install wails.io`
 * @dependencies `go.dev^1.18`, `npmjs.com`, `gnu.org/gcc`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wailsio
 * console.log(pkg.name)        // "wails.io"
 * console.log(pkg.description) // "Package from pantry: wails.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wails-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wailsioPackage = {
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
  description: 'Package from pantry: wails.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install wails.io' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wails.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WailsioPackage = typeof wailsioPackage
