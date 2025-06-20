/**
 * **testscript** - Selected Go-internal packages factored out from the standard library
 *
 * @domain `go.dev/testscript`
 * @programs `testscript`
 * @version `1.14.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install testscript`
 * @name `testscript`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.testscript
 * // Or access via domain
 * const samePkg = pantry.godevtestscript
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "testscript"
 * console.log(pkg.description) // "Selected Go-internal packages factored out from..."
 * console.log(pkg.programs)    // ["testscript"]
 * console.log(pkg.versions[0]) // "1.14.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-dev/testscript.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const testscriptPackage = {
  /**
   * The display name of this package.
   */
  name: 'testscript' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.dev/testscript' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Selected Go-internal packages factored out from the standard library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/go.dev/testscript/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install testscript' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'testscript',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.1',
    '1.14.0',
    '1.13.1',
    '1.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TestscriptPackage = typeof testscriptPackage
