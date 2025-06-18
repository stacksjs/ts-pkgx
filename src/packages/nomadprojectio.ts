/**
 * **nomadproject.io** - Package from pantry: nomadproject.io
 *
 * @domain `nomadproject.io`
 *
 * @install `launchpad install nomadproject.io`
 * @dependencies `go.dev~1.22`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nomadprojectio
 * console.log(pkg.name)        // "nomadproject.io"
 * console.log(pkg.description) // "Package from pantry: nomadproject.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nomadproject-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nomadprojectioPackage = {
  /**
   * The display name of this package.
   */
  name: 'nomadproject.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nomadproject.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nomadproject.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install nomadproject.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.22',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nomadproject.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NomadprojectioPackage = typeof nomadprojectioPackage
