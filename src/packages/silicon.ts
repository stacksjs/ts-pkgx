/**
 * **silicon** - Create beautiful image of your source code.
 *
 * @domain `crates.io/silicon`
 * @programs `silicon`
 * @version `0.5.3` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/silicon.md
 *
 * @install `sh <(curl https://pkgx.sh) silicon`
 * @name `silicon`
 * @dependencies `harfbuzz.org^5`, `linuxfreedesktop.org/fontconfigfreetype.orgx.org/xcb`, `freedesktop.org/fontconfig`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.silicon
 * // Or access via domain
 * const samePkg = pantry.cratesiosilicon
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "silicon"
 * console.log(pkg.description) // "Create beautiful image of your source code."
 * console.log(pkg.programs)    // ["silicon"]
 * console.log(pkg.versions[0]) // "0.5.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/silicon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const siliconPackage = {
  /**
   * The display name of this package.
   */
  name: 'silicon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/silicon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Create beautiful image of your source code.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/silicon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) silicon' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'silicon',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'harfbuzz.org^5',
    'linuxfreedesktop.org/fontconfigfreetype.orgx.org/xcb',
    'freedesktop.org/fontconfig',
    'freetype.org',
    'x.org/xcb',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.3',
    '0.5.2',
    '0.5.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/silicon' as const,
}

export type SiliconPackage = typeof siliconPackage
