/**
 * **vspipe** - A video processing framework with simplicity in mind
 *
 * @domain `vapoursynth.com`
 * @programs `vspipe`
 * @version `71.0.0` (8 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/vapoursynth-com.md
 *
 * @install `sh <(curl https://pkgx.sh) vspipe`
 * @name `vspipe`
 * @dependencies `python.org~3.11`, `github.com/sekrit-twc/zimg`, `linuxgnu.org/gcc/libstdcxx`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vspipe
 * // Or access via domain
 * const samePkg = pantry.vapoursynthcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vspipe"
 * console.log(pkg.description) // "A video processing framework with simplicity in..."
 * console.log(pkg.programs)    // ["vspipe"]
 * console.log(pkg.versions[0]) // "71.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vapoursynth-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vspipePackage = {
  /**
   * The display name of this package.
   */
  name: 'vspipe' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vapoursynth.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A video processing framework with simplicity in mind' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vapoursynth.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) vspipe' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vspipe',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'github.com/sekrit-twc/zimg',
    'linuxgnu.org/gcc/libstdcxx',
    'gnu.org/gcc/libstdcxx',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '71.0.0',
    '70.0.0',
    '69.0.0',
    '68.0.0',
    '67.0.0',
    '66.0.0',
    '65.0.0',
    '64.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'vapoursynth.com' as const,
}

export type VspipePackage = typeof vspipePackage
