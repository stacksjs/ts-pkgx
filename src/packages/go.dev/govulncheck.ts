/**
 * **govulncheck** - [mirror] the database client and tools for the Go vulnerability database
 *
 * @domain `go.dev/govulncheck`
 * @programs `govulncheck`
 * @version `1.1.4` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) govulncheck`
 * @name `govulncheck`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.govulncheck
 * // Or access via domain
 * const samePkg = pantry.godevgovulncheck
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "govulncheck"
 * console.log(pkg.description) // "[mirror] the database client and tools for the ..."
 * console.log(pkg.programs)    // ["govulncheck"]
 * console.log(pkg.versions[0]) // "1.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-dev/govulncheck.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const govulncheckPackage = {
  /**
   * The display name of this package.
   */
  name: 'govulncheck' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.dev/govulncheck' as const,
  /**
   * Brief description of what this package does.
   */
  description: '[mirror] the database client and tools for the Go vulnerability database' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/go.dev/govulncheck/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) govulncheck' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'govulncheck',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.4',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.4',
    '1.0.3',
    '1.0.2',
    '1.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'go.dev/govulncheck' as const,
}

export type GovulncheckPackage = typeof govulncheckPackage
