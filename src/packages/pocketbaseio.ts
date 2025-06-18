/**
 * **pocketbase.io** - Package from pantry: pocketbase.io
 *
 * @domain `pocketbase.io`
 *
 * @install `launchpad install pocketbase.io`
 * @dependencies `go.dev>=1.16`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pocketbaseio
 * console.log(pkg.name)        // "pocketbase.io"
 * console.log(pkg.description) // "Package from pantry: pocketbase.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pocketbase-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pocketbaseioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pocketbase.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pocketbase.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pocketbase.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pocketbase.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev>=1.16',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pocketbase.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PocketbaseioPackage = typeof pocketbaseioPackage
