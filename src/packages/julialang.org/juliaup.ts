/**
 * **juliaup** - Julia installer and version multiplexer
 *
 * @domain `julialang.org/juliaup`
 * @programs `juliaup`
 * @version `1.17.21` (56 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install juliaup`
 * @name `juliaup`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.juliaup
 * // Or access via domain
 * const samePkg = pantry.julialangorgjuliaup
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "juliaup"
 * console.log(pkg.description) // "Julia installer and version multiplexer"
 * console.log(pkg.programs)    // ["juliaup"]
 * console.log(pkg.versions[0]) // "1.17.21" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/julialang-org/juliaup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const juliaupPackage = {
  /**
   * The display name of this package.
   */
  name: 'juliaup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'julialang.org/juliaup' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Julia installer and version multiplexer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/julialang.org/juliaup/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install juliaup' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'juliaup',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.17.21',
    '1.17.20',
    '1.17.19',
    '1.17.18',
    '1.17.17',
    '1.17.16',
    '1.17.15',
    '1.17.14',
    '1.17.13',
    '1.17.12',
    '1.17.11',
    '1.17.10',
    '1.17.9',
    '1.17.8',
    '1.17.7',
    '1.17.6',
    '1.17.5',
    '1.17.4',
    '1.17.3',
    '1.17.2',
    '1.17.1',
    '1.17.0',
    '1.16.12',
    '1.16.11',
    '1.16.10',
    '1.16.9',
    '1.16.8',
    '1.16.7',
    '1.16.6',
    '1.16.5',
    '1.16.4',
    '1.16.3',
    '1.16.2',
    '1.16.1',
    '1.16.0',
    '1.15.0',
    '1.14.9',
    '1.14.8',
    '1.14.7',
    '1.14.6',
    '1.14.5',
    '1.14.4',
    '1.14.3',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.1',
    '1.13.0',
    '1.12.5',
    '1.12.4',
    '1.12.3',
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.23',
    '1.11.22',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) juliaup -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install juliaup' as const,
}

export type JuliaupPackage = typeof juliaupPackage
