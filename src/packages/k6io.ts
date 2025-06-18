/**
 * **k6.io** - Package from pantry: k6.io
 *
 * @domain `k6.io`
 *
 * @install `launchpad install k6.io`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.k6io
 * console.log(pkg.name)        // "k6.io"
 * console.log(pkg.description) // "Package from pantry: k6.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/k6-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k6ioPackage = {
  /**
   * The display name of this package.
   */
  name: 'k6.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'k6.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: k6.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install k6.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/k6.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type K6ioPackage = typeof k6ioPackage
