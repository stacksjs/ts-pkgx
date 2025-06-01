/**
 * **onefetch** - Command-line Git information tool
 *
 * @domain `onefetch.dev`
 * @programs `onefetch`
 * @version `2.24.0` (8 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/onefetch-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) onefetch`
 * @aliases `onefetch`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.onefetch
 * // Or access via domain
 * const samePkg = pantry.onefetchdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "onefetch"
 * console.log(pkg.description) // "Command-line Git information tool"
 * console.log(pkg.programs)    // ["onefetch"]
 * console.log(pkg.versions[0]) // "2.24.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/onefetch-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const onefetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'onefetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'onefetch.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line Git information tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/onefetch.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) onefetch' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'onefetch',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.24.0',
    '2.23.1',
    '2.23.0',
    '2.22.0',
    '2.21.0',
    '2.20.0',
    '2.19.0',
    '2.18.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'onefetch',
  ] as const,
  fullPath: 'onefetch.dev' as const,
}

export type OnefetchPackage = typeof onefetchPackage
