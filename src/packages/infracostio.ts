/**
 * **infracost.io** - Package from pantry: infracost.io
 *
 * @domain `infracost.io`
 *
 * @install `launchpad install infracost.io`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.infracostio
 * console.log(pkg.name)        // "infracost.io"
 * console.log(pkg.description) // "Package from pantry: infracost.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/infracost-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const infracostioPackage = {
  /**
   * The display name of this package.
   */
  name: 'infracost.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'infracost.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: infracost.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install infracost.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/infracost.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type InfracostioPackage = typeof infracostioPackage
