/**
 * **mako-render** - Mako Templates for Python
 *
 * @domain `makotemplates.org`
 * @programs `mako-render`
 * @version `1.3.10` (12 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/makotemplates-org.md
 * @install `sh <(curl https://pkgx.sh) mako-render`
 * @aliases `mako-render`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.makorender
 * // Or access via domain
 * const samePkg = pantry.makotemplatesorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mako-render"
 * console.log(pkg.description) // "Mako Templates for Python"
 * console.log(pkg.programs)    // ["mako-render"]
 * console.log(pkg.versions[0]) // "1.3.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/makotemplates-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const makorenderPackage = {
  /**
   * The display name of this package.
   */
  name: 'mako-render' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'makotemplates.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mako Templates for Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/makotemplates.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mako-render' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mako-render',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.10',
    '1.3.9',
    '1.3.8',
    '1.3.7',
    '1.3.6',
    '1.3.5',
    '1.3.4',
    '1.3.3',
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.4',
  ] as const,
  fullPath: 'makotemplates.org' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mako-render',
  ] as const,
}

export type MakorenderPackage = typeof makorenderPackage
