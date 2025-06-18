/**
 * **cpanm** - cpanminus - get, unpack, build and install modules from CPAN
 *
 * @domain `cpanmin.us`
 * @programs `cpanm`
 * @version `1.7048.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) cpanm`
 * @name `cpanm`
 * @dependencies `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cpanm
 * // Or access via domain
 * const samePkg = pantry.cpanminus
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cpanm"
 * console.log(pkg.description) // "cpanminus - get, unpack, build and install modu..."
 * console.log(pkg.programs)    // ["cpanm"]
 * console.log(pkg.versions[0]) // "1.7048.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cpanmin-us.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cpanmPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpanm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cpanmin.us' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'cpanminus - get, unpack, build and install modules from CPAN' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cpanmin.us/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cpanm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cpanm',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7048.0',
    '1.7047.0',
    '1.7046.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'cpanmin.us' as const,
}

export type CpanmPackage = typeof cpanmPackage
