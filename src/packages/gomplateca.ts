/**
 * **gomplate.ca** - Package from pantry: gomplate.ca
 *
 * @domain `gomplate.ca`
 *
 * @install `launchpad install gomplate.ca`
 * @dependencies `go.dev~1.22.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gomplateca
 * console.log(pkg.name)        // "gomplate.ca"
 * console.log(pkg.description) // "Package from pantry: gomplate.ca"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gomplate-ca.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gomplatecaPackage = {
  /**
   * The display name of this package.
   */
  name: 'gomplate.ca' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gomplate.ca' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gomplate.ca' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gomplate.ca' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.22.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gomplate.ca/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GomplatecaPackage = typeof gomplatecaPackage
