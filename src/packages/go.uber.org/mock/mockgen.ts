/**
 * **mockgen** - GoMock is a mocking framework for the Go programming language.
 *
 * @domain `go.uber.org/mock/mockgen`
 * @programs `mockgen`
 * @version `0.5.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mockgen`
 * @name `mockgen`
 * @dependencies `go.dev^1.20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mockgen
 * // Or access via domain
 * const samePkg = pantry.gouberorgmockmockgen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mockgen"
 * console.log(pkg.description) // "GoMock is a mocking framework for the Go progra..."
 * console.log(pkg.programs)    // ["mockgen"]
 * console.log(pkg.versions[0]) // "0.5.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-uber-org/mock/mockgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mockgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'mockgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.uber.org/mock/mockgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GoMock is a mocking framework for the Go programming language.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/go.uber.org/mock/mockgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/uber-go/mock' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mockgen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mockgen',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.0',
    '0.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MockgenPackage = typeof mockgenPackage
