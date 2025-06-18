/**
 * **planetscale.com** - Package from pantry: planetscale.com
 *
 * @domain `planetscale.com`
 *
 * @install `launchpad install planetscale.com`
 * @dependencies `go.dev~1.22.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.planetscalecom
 * console.log(pkg.name)        // "planetscale.com"
 * console.log(pkg.description) // "Package from pantry: planetscale.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/planetscale-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const planetscalecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'planetscale.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'planetscale.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: planetscale.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install planetscale.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.22.4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/planetscale.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PlanetscalecomPackage = typeof planetscalecomPackage
