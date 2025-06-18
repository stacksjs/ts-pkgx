/**
 * **unrar** - pkgx package
 *
 * @domain `rarlab.com`
 * @programs `unrar`
 * @version `7.1.7` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install unrar`
 * @aliases `unrar`
 * @dependencies `gnu.org/coreutils^9`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.unrar
 * // Or access via domain
 * const samePkg = pantry.rarlabcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rarlab.com"
 * console.log(pkg.programs)    // ["unrar"]
 * console.log(pkg.versions[0]) // "7.1.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rarlab-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unrarPackage = {
  /**
   * The display name of this package.
   */
  name: 'rarlab.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rarlab.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rarlab.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install unrar' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'unrar',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/coreutils^9',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.1.7',
    '7.1.6',
    '7.1.5',
    '7.1.4',
    '7.1.2',
    '7.1.1',
    '7.0.9',
    '7.0.8',
    '7.0.7',
    '7.0.6',
    '7.0.5',
    '7.0.4',
    '7.0.3',
    '7.0.2',
    '7.0.1',
    '6.2.12',
    '6.2.11',
    '6.2.10',
    '6.2.9',
    '6.2.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'unrar',
  ] as const,
}

export type UnrarPackage = typeof unrarPackage
