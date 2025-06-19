/**
 * **conda** - pkgx package
 *
 * @domain `conda.org`
 * @programs `conda`
 * @version `25.3.1` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install conda`
 * @aliases `conda`
 * @dependencies `pkgx.sh^1`, `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.conda
 * // Or access via domain
 * const samePkg = pantry.condaorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "conda.org"
 * console.log(pkg.programs)    // ["conda"]
 * console.log(pkg.versions[0]) // "25.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/conda-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const condaPackage = {
  /**
   * The display name of this package.
   */
  name: 'conda.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'conda.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/conda.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install conda' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'conda',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.3.1',
    '25.1.1',
    '24.11.1',
    '24.9.2',
    '24.7.1',
    '24.5.0',
    '24.4.0',
    '24.3.0',
    '24.1.2',
    '23.11.0',
    '23.10.0',
    '23.9.0',
    '23.7.4',
    '23.7.3',
    '23.7.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'conda',
  ] as const,
}

export type CondaPackage = typeof condaPackage
