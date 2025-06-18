/**
 * **runatlantis.io** - Package from pantry: runatlantis.io
 *
 * @domain `runatlantis.io`
 *
 * @install `launchpad install runatlantis.io`
 * @dependencies `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.runatlantisio
 * console.log(pkg.name)        // "runatlantis.io"
 * console.log(pkg.description) // "Package from pantry: runatlantis.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/runatlantis-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const runatlantisioPackage = {
  /**
   * The display name of this package.
   */
  name: 'runatlantis.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'runatlantis.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: runatlantis.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install runatlantis.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/runatlantis.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RunatlantisioPackage = typeof runatlantisioPackage
