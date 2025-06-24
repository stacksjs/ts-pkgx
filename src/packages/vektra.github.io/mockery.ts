/**
 * **mockery** - Mock code autogenerator for Golang
 *
 * @domain `vektra.github.io/mockery`
 * @programs `mockery`
 * @version `3.4.0` (82 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mockery`
 * @name `mockery`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mockery
 * // Or access via domain
 * const samePkg = pantry.vektragithubiomockery
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mockery"
 * console.log(pkg.description) // "Mock code autogenerator for Golang"
 * console.log(pkg.programs)    // ["mockery"]
 * console.log(pkg.versions[0]) // "3.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vektra-github-io/mockery.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mockeryPackage = {
  /**
   * The display name of this package.
   */
  name: 'mockery' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vektra.github.io/mockery' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mock code autogenerator for Golang' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vektra.github.io/mockery/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mockery' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mockery',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.0',
    '3.3.6',
    '3.3.4',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.5',
    '3.2.4',
    '3.2.3',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.0',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.53.4',
    '2.53.3',
    '2.53.2',
    '2.53.1',
    '2.53.0',
    '2.52.4',
    '2.52.3',
    '2.52.2',
    '2.52.1',
    '2.52.0',
    '2.51.1',
    '2.51.0',
    '2.50.4',
    '2.50.2',
    '2.50.1',
    '2.50.0',
    '2.49.2',
    '2.49.1',
    '2.49.0',
    '2.48.0',
    '2.47.0',
    '2.46.3',
    '2.46.2',
    '2.46.1',
    '2.46.0',
    '2.45.1',
    '2.45.0',
    '2.44.2',
    '2.44.1',
    '2.43.2',
    '2.43.1',
    '2.43.0',
    '2.42.3',
    '2.42.2',
    '2.42.1',
    '2.42.0',
    '2.41.0',
    '2.40.3',
    '2.40.2',
    '2.40.1',
    '2.40.0',
    '2.39.2',
    '2.39.1',
    '2.39.0',
    '2.38.0',
    '2.37.1',
    '2.37.0',
    '2.36.1',
    '2.36.0',
    '2.35.4',
    '2.35.3',
    '2.35.2',
    '2.35.1',
    '2.34.2',
    '2.34.1',
    '2.34.0',
    '2.33.3',
    '2.33.2',
    '2.33.1',
    '2.33.0',
    '2.32.4',
    '2.32.3',
    '2.32.2',
    '2.32.1',
    '2.32.0',
    '2.23.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mockery -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mockery' as const,
}

export type MockeryPackage = typeof mockeryPackage
