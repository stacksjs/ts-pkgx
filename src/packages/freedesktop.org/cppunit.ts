/**
 * **cppunit** - Package from pantry: freedesktop.org/cppunit
 *
 * @domain `freedesktop.org/cppunit`
 *
 * @install `launchpad install freedesktop.org/cppunit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgcppunit
 * console.log(pkg.name)        // "cppunit"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/cppunit"
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
  description: 'Package from pantry: freedesktop.org/cppunit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/cppunit' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/cppunit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/cppunit' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/cppunit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgcppunitPackage = typeof freedesktoporgcppunitPackage
