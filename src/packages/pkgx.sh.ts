/**
 * **pkgx** - Standalone binary that can run anything
 *
 * @domain `pkgx.sh`
 * @programs `pkgx`
 * @version `2.7.0` (35 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/pkgx-sh.md
 *
 * @install `sh <(curl https://pkgx.sh) pkgx`
 * @aliases `pkgx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pkgx
 * // Or access via domain
 * const samePkg = pantry.pkgxsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pkgx"
 * console.log(pkg.description) // "Standalone binary that can run anything"
 * console.log(pkg.programs)    // ["pkgx"]
 * console.log(pkg.versions[0]) // "2.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkgx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Standalone binary that can run anything' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pkgx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pkgx',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.0',
    '2.6.0',
    '2.5.0',
    '2.4.0',
    '2.3.2',
    '2.3.1',
    '2.3.0',
    '2.2.1',
    '2.2.0',
    '2.1.4',
    '2.1.3',
    '2.1.2',
    '2.1.1',
    '2.1.0',
    '2.0.0',
    '1.5.0',
    '1.4.1',
    '1.4.0',
    '1.3.1',
    '1.3.0',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.6',
    '1.1.5',
    '1.1.4',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.4',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pkgx',
  ] as const,
  fullPath: 'pkgx.sh' as const,
}

export type PkgxPackage = typeof pkgxPackage
