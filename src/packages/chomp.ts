/**
 * **chomp** - 'JS Make' - parallel task runner for the frontend ecosystem with a JS extension system.
 *
 * @domain `chompbuild.com`
 * @programs `chomp`
 * @version `0.2.23` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/chompbuild-com.md
 *
 * @install `sh <(curl https://pkgx.sh) chomp`
 * @name `chomp`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.chomp
 * // Or access via domain
 * const samePkg = pantry.chompbuildcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chomp"
 * console.log(pkg.description) // "'JS Make' - parallel task runner for the fronte..."
 * console.log(pkg.programs)    // ["chomp"]
 * console.log(pkg.versions[0]) // "0.2.23" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chompbuild-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chompPackage = {
  /**
   * The display name of this package.
   */
  name: 'chomp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chompbuild.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '\'JS Make\' - parallel task runner for the frontend ecosystem with a JS extension system.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chompbuild.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) chomp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'chomp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.23',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'chompbuild.com' as const,
}

export type ChompPackage = typeof chompPackage
