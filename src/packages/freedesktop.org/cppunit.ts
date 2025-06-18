/**
 * **cppunit** - Unit testing framework for C++
 *
 * @domain `freedesktop.org/cppunit`
 * @programs `cppunit-config`, `DllPlugInTester`
 * @version `1.13.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +freedesktop.org/cppunit -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgcppunit
 * console.log(pkg.name)        // "cppunit"
 * console.log(pkg.description) // "Unit testing framework for C++"
 * console.log(pkg.programs)    // ["cppunit-config", "DllPlugInTester"]
 * console.log(pkg.versions[0]) // "1.13.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/cppunit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgcppunitPackage = {
  /**
   * The display name of this package.
   */
  name: 'cppunit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/cppunit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Unit testing framework for C++' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/cppunit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +freedesktop.org/cppunit -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cppunit-config',
    'DllPlugInTester',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.13.2',
  ] as const,
  aliases: [] as const,
}

export type FreedesktoporgcppunitPackage = typeof freedesktoporgcppunitPackage
