/**
 * **talos.dev** - Package from pantry: talos.dev
 *
 * @domain `talos.dev`
 *
 * @install `launchpad install talos.dev`
 * @dependencies `go.dev^1.21`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.talosdev
 * console.log(pkg.name)        // "talos.dev"
 * console.log(pkg.description) // "Package from pantry: talos.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/talos-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const talosdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'talos.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'talos.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: talos.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install talos.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/talos.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TalosdevPackage = typeof talosdevPackage
