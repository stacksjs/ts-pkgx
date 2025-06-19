/**
 * **tox** - Command line driven CI frontend and development task automation tool.
 *
 * @domain `tox.wiki`
 * @programs `tox`
 * @version `4.27.0` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tox`
 * @aliases `tox`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tox
 * // Or access via domain
 * const samePkg = pantry.toxwiki
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tox.wiki"
 * console.log(pkg.description) // "Command line driven CI frontend and development..."
 * console.log(pkg.programs)    // ["tox"]
 * console.log(pkg.versions[0]) // "4.27.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tox-wiki.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const toxPackage = {
  /**
   * The display name of this package.
   */
  name: 'tox.wiki' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tox.wiki' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command line driven CI frontend and development task automation tool.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tox.wiki/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tox' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tox',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.27.0',
    '4.26.0',
    '4.25.0',
    '4.24.2',
    '4.24.1',
    '4.24.0',
    '4.23.2',
    '4.23.1',
    '4.23.0',
    '4.22.0',
    '4.21.2',
    '4.21.1',
    '4.21.0',
    '4.20.0',
    '4.19.0',
    '4.18.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tox',
  ] as const,
}

export type ToxPackage = typeof toxPackage
