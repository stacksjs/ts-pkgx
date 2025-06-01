/**
 * **dagger** - An engine to run your pipelines in containers
 *
 * @domain `dagger.io`
 * @programs `dagger`
 * @version `0.18.9` (90 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/dagger-io.md
 *
 * @install `sh <(curl https://pkgx.sh) dagger`
 * @aliases `dagger`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.dagger
 * // Or access via domain
 * const samePkg = pantry.daggerio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dagger"
 * console.log(pkg.description) // "An engine to run your pipelines in containers"
 * console.log(pkg.programs)    // ["dagger"]
 * console.log(pkg.versions[0]) // "0.18.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dagger-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daggerPackage = {
  /**
   * The display name of this package.
   */
  name: 'dagger' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dagger.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An engine to run your pipelines in containers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dagger.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) dagger' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dagger',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.9',
    '0.18.8',
    '0.18.7',
    '0.18.6',
    '0.18.5',
    '0.18.4',
    '0.18.3',
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.16.3',
    '0.16.2',
    '0.16.1',
    '0.16.0',
    '0.15.4',
    '0.15.3',
    '0.15.2',
    '0.15.1',
    '0.15.0',
    '0.14.0',
    '0.13.7',
    '0.13.6',
    '0.13.5',
    '0.13.4',
    '0.13.3',
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.7',
    '0.12.6',
    '0.12.5',
    '0.12.4',
    '0.12.3',
    '0.12.2',
    '0.12.1',
    '0.12.0',
    '0.11.9',
    '0.11.8',
    '0.11.7',
    '0.11.6',
    '0.11.5',
    '0.11.4',
    '0.11.3',
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.3',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.11',
    '0.9.10',
    '0.9.9',
    '0.9.8',
    '0.9.7',
    '0.9.6',
    '0.9.5',
    '0.9.4',
    '0.9.3',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.8',
    '0.8.7',
    '0.8.6',
    '0.8.5',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.13',
    '0.3.12',
    '0.3.10',
    '0.3.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'dagger',
  ] as const,
  fullPath: 'dagger.io' as const,
}

export type DaggerPackage = typeof daggerPackage
