/**
 * **nx** - pkgx package
 *
 * @domain `nx.dev`
 * @programs `nx`
 * @version `21.6.0` (175 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nx`
 * @aliases `nx`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nx
 * // Or access via domain
 * const samePkg = pantry.nxdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nx.dev"
 * console.log(pkg.programs)    // ["nx"]
 * console.log(pkg.versions[0]) // "21.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nx-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nxPackage = {
  /**
   * The display name of this package.
   */
  name: 'nx.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nx.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nx.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nx',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '21.6.0',
    '21.5.1',
    '21.5.0',
    '21.4.1',
    '21.4.0',
    '21.3.11',
    '21.3.10',
    '21.3.9',
    '21.3.8',
    '21.3.7',
    '21.3.6',
    '21.3.5',
    '21.3.4',
    '21.3.3',
    '21.3.2',
    '21.3.1',
    '21.3.0',
    '21.2.4',
    '21.2.3',
    '21.2.2',
    '21.2.1',
    '21.2.0',
    '21.1.3',
    '21.1.2',
    '21.1.1',
    '21.1.0',
    '21.0.4',
    '21.0.3',
    '21.0.2',
    '21.0.1',
    '21.0.0',
    '20.11.0',
    '20.9.0',
    '20.8.2',
    '20.8.1',
    '20.8.0',
    '20.7.2',
    '20.7.1',
    '20.7.0',
    '20.6.4',
    '20.6.3',
    '20.6.2',
    '20.6.1',
    '20.6.0',
    '20.5.1',
    '20.5.0',
    '20.4.6',
    '20.4.5',
    '20.4.4',
    '20.4.3',
    '20.4.2',
    '20.4.1',
    '20.4.0',
    '20.3.4',
    '20.3.3',
    '20.3.2',
    '20.3.1',
    '20.3.0',
    '20.2.2',
    '20.2.1',
    '20.2.0',
    '20.1.4',
    '20.1.3',
    '20.1.2',
    '20.1.1',
    '20.1.0',
    '20.0.13',
    '20.0.12',
    '20.0.11',
    '20.0.10',
    '20.0.9',
    '20.0.8',
    '20.0.7',
    '20.0.6',
    '20.0.5',
    '20.0.4',
    '20.0.3',
    '20.0.2',
    '20.0.1',
    '20.0.0',
    '19.8.14',
    '19.8.13',
    '19.8.12',
    '19.8.11',
    '19.8.10',
    '19.8.9',
    '19.8.8',
    '19.8.7',
    '19.8.6',
    '19.8.5',
    '19.8.4',
    '19.8.3',
    '19.8.2',
    '19.8.1',
    '19.8.0',
    '19.7.5',
    '19.7.4',
    '19.7.3',
    '19.7.2',
    '19.7.1',
    '19.7.0',
    '19.6.7',
    '19.6.6',
    '19.6.5',
    '19.6.4',
    '19.6.3',
    '19.6.2',
    '19.6.1',
    '19.6.0',
    '19.5.10',
    '19.5.9',
    '19.5.8',
    '19.5.7',
    '19.5.6',
    '19.5.5',
    '19.5.4',
    '19.5.3',
    '19.5.2',
    '19.5.1',
    '19.5.0',
    '19.4.4',
    '19.4.3',
    '19.4.2',
    '19.4.1',
    '19.4.0',
    '19.3.2',
    '19.3.1',
    '19.3.0',
    '19.2.3',
    '19.2.2',
    '19.2.1',
    '19.2.0',
    '19.1.2',
    '19.1.1',
    '19.1.0',
    '19.0.8',
    '19.0.7',
    '19.0.6',
    '19.0.5',
    '19.0.4',
    '19.0.3',
    '19.0.2',
    '19.0.1',
    '19.0.0',
    '18.3.5',
    '18.3.4',
    '18.3.3',
    '18.3.2',
    '18.3.1',
    '18.3.0',
    '18.2.4',
    '18.2.3',
    '18.2.2',
    '18.2.1',
    '18.2.0',
    '18.1.3',
    '18.1.2',
    '18.1.1',
    '18.1.0',
    '18.0.8',
    '18.0.7',
    '18.0.6',
    '18.0.5',
    '18.0.4',
    '18.0.3',
    '18.0.2',
    '18.0.1',
    '18.0.0',
    '17.3.2',
    '17.3.1',
    '17.3.0',
    '17.2.7',
    '17.0.6',
    '17.0.5',
    '17.0.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nx',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) nx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nx' as const,
}

export type NxPackage = typeof nxPackage
