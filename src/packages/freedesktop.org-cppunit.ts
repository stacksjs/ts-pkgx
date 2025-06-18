/**
 * **cppunit** - Unit testing framework for C++
 *
 * @domain `freedesktop.org/cppunit`
 * @programs `cppunit-config`, `DllPlugInTester`
 * @version `1.13.2` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/cppunit.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/cppunit -- $SHELL -i`
 * @aliases `cppunit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cppunit
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgcppunit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/cppunit"
 * console.log(pkg.description) // "Unit testing framework for C++"
 * console.log(pkg.programs)    // ["cppunit-config", "DllPlugInTester"]
 * console.log(pkg.versions[0]) // "1.13.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/cppunit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cppunitPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/cppunit' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/cppunit -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cppunit',
  ] as const,
  fullPath: 'freedesktop.org/cppunit' as const,
}

export type CppunitPackage = typeof cppunitPackage
