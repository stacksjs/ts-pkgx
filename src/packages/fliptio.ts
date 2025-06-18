/**
 * **flipt.io** - Package from pantry: flipt.io
 *
 * @domain `flipt.io`
 *
 * @install `launchpad install flipt.io`
 * @dependencies `go.dev^1.22.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fliptio
 * console.log(pkg.name)        // "flipt.io"
 * console.log(pkg.description) // "Package from pantry: flipt.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flipt-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fliptioPackage = {
  /**
   * The display name of this package.
   */
  name: 'flipt.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flipt.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: flipt.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install flipt.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.22.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/flipt.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FliptioPackage = typeof fliptioPackage
