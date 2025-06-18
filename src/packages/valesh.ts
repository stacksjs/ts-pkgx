/**
 * **vale.sh** - Package from pantry: vale.sh
 *
 * @domain `vale.sh`
 *
 * @install `launchpad install vale.sh`
 * @dependencies `go.dev~1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.valesh
 * console.log(pkg.name)        // "vale.sh"
 * console.log(pkg.description) // "Package from pantry: vale.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vale-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const valeshPackage = {
  /**
   * The display name of this package.
   */
  name: 'vale.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vale.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vale.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vale.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vale.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ValeshPackage = typeof valeshPackage
