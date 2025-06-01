/**
 * **meson** - Fast and user friendly build system
 *
 * @domain `mesonbuild.com`
 * @programs `meson`
 * @version `1.8.1` (27 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/mesonbuild-com.md
 *
 * @install `sh <(curl https://pkgx.sh) meson`
 * @aliases `meson`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.meson
 * // Or access via domain
 * const samePkg = pantry.mesonbuildcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "meson"
 * console.log(pkg.description) // "Fast and user friendly build system"
 * console.log(pkg.programs)    // ["meson"]
 * console.log(pkg.versions[0]) // "1.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mesonbuild-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mesonPackage = {
  /**
   * The display name of this package.
   */
  name: 'meson' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mesonbuild.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast and user friendly build system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mesonbuild.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) meson' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'meson',
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
    '1.8.1',
    '1.8.0',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.1',
    '1.6.0',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.3',
    '1.2.2',
    '1.2.0',
    '1.1.1',
    '1.1.0',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.64.1',
    '0.64.0',
    '0.63.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'meson',
  ] as const,
  fullPath: 'mesonbuild.com' as const,
}

export type MesonPackage = typeof mesonPackage
