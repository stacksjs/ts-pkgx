/**
 * **fly.io** - Package from pantry: fly.io
 *
 * @domain `fly.io`
 *
 * @install `launchpad install fly.io`
 * @dependencies `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flyio
 * console.log(pkg.name)        // "fly.io"
 * console.log(pkg.description) // "Package from pantry: fly.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fly-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flyioPackage = {
  /**
   * The display name of this package.
   */
  name: 'fly.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fly.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fly.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install fly.io' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fly.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FlyioPackage = typeof flyioPackage
