/**
 * **libass/libass** - libass is a portable subtitle renderer for the ASS/SSA (Advanced Substation Alpha/Substation Alpha) subtitle format.
 *
 * @domain `github.com/libass/libass`
 * @version `0.17.4` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/libass/libass -- $SHELL -i`
 * @aliases `libass/libass`
 * @dependencies `freetype.org@2`, `gnu.org/fribidi@1`, `harfbuzz.org`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libasslibass
 * // Or access via domain
 * const samePkg = pantry.githubcomlibasslibass
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/libass/libass"
 * console.log(pkg.description) // "libass is a portable subtitle renderer for the ..."
 * console.log(pkg.versions[0]) // "0.17.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libass/libass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libasslibassPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/libass/libass' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libass/libass' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'libass is a portable subtitle renderer for the ASS/SSA (Advanced Substation Alpha/Substation Alpha) subtitle format.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libass/libass/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/libass/libass -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freetype.org@2',
    'gnu.org/fribidi@1',
    'harfbuzz.org',
    'github.com/adah1972/libunibreak',
    'linuxfreedesktop.org/fontconfig@2',
    'freedesktop.org/fontconfig@2',
    'x86-64nasm.us@2',
    'nasm.us@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.17.4',
    '0.17.3',
    '0.17.2',
    '0.17.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libass/libass',
  ] as const,
  fullPath: 'github.com/libass/libass' as const,
}

export type LibasslibassPackage = typeof libasslibassPackage
