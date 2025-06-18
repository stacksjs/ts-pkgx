/**
 * **mock** - pkgx package
 *
 * @domain `go.uber.org/mock`
 *
 * @install `pkgx go.uber.org/mock`
 * @name `mock`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mock
 * // Or access via domain
 * const samePkg = pantry.gouberorgmock
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mock"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-uber-org/mock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mockPackage = {
  /**
   * The display name of this package.
   */
  name: 'mock' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.uber.org/mock' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx go.uber.org/mock' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'go.uber.org/mock' as const,
}

export type MockPackage = typeof mockPackage
