/**
 * **odigos.io** - Package from pantry: odigos.io
 *
 * @domain `odigos.io`
 *
 * @install `launchpad install odigos.io`
 * @dependencies `go.dev^1.22`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.odigosio
 * console.log(pkg.name)        // "odigos.io"
 * console.log(pkg.description) // "Package from pantry: odigos.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/odigos-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const odigosioPackage = {
  /**
   * The display name of this package.
   */
  name: 'odigos.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'odigos.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: odigos.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install odigos.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.22',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/odigos.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OdigosioPackage = typeof odigosioPackage
