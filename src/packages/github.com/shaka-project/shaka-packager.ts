/**
 * **shaka-project/shaka-packager** - A media packaging and development framework for VOD and Live DASH and HLS applications, supporting Common Encryption for Widevine and other DRM Systems.
 *
 * @domain `github.com/shaka-project/shaka-packager`
 * @programs `packager`, `mpd_generator`
 * @version `3.4.2` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/shaka-project/shaka-packager -- $SHELL -i`
 * @aliases `shaka-project/shaka-packager`
 * @dependencies `linuxgnu.org/gcc/libstdcxx`, `gnu.org/gcc/libstdcxx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.shakaprojectshakapackager
 * // Or access via domain
 * const samePkg = pantry.githubcomshakaprojectshakapackager
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/shaka-project/shaka-packager"
 * console.log(pkg.description) // "A media packaging and development framework for..."
 * console.log(pkg.programs)    // ["packager", "mpd_generator"]
 * console.log(pkg.versions[0]) // "3.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/shaka-project/shaka-packager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const shakaprojectshakapackagerPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/shaka-project/shaka-packager' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/shaka-project/shaka-packager' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A media packaging and development framework for VOD and Live DASH and HLS applications, supporting Common Encryption for Widevine and other DRM Systems.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/shaka-project/shaka-packager/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/shaka-project/shaka-packager -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'packager',
    'mpd_generator',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxgnu.org/gcc/libstdcxx',
    'gnu.org/gcc/libstdcxx',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.2',
    '3.4.1',
    '3.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'shaka-project/shaka-packager',
  ] as const,
  fullPath: 'github.com/shaka-project/shaka-packager' as const,
}

export type ShakaprojectshakapackagerPackage = typeof shakaprojectshakapackagerPackage
