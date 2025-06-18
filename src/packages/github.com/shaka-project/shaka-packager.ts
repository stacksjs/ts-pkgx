/**
 * **shaka-packager** - A media packaging and development framework for VOD and Live DASH and HLS applications, supporting Common Encryption for Widevine and other DRM Systems.
 *
 * @domain `github.com/shaka-project/shaka-packager`
 * @programs `packager`, `mpd_generator`
 * @version `3.4.2` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/shaka-project/shaka-packager -- $SHELL -i`
 * @dependencies `gnu.org/gcc/libstdcxx`, `ninja-build.org`, `cmake.org^3`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomshakaprojectshakapackager
 * console.log(pkg.name)        // "shaka-packager"
 * console.log(pkg.description) // "A media packaging and development framework for..."
 * console.log(pkg.programs)    // ["packager", "mpd_generator"]
 * console.log(pkg.versions[0]) // "3.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/shaka-project/shaka-packager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomshakaprojectshakapackagerPackage = {
  /**
   * The display name of this package.
   */
  name: 'shaka-packager' as const,
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
  githubUrl: 'https://github.com/shaka-project/shaka-packager' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/shaka-project/shaka-packager -- $SHELL -i' as const,
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
    'gnu.org/gcc/libstdcxx',
    'ninja-build.org',
    'cmake.org^3',
    'python.org^3.10',
    'gnu.org/gcc',
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
  aliases: [] as const,
}

export type GithubcomshakaprojectshakapackagerPackage = typeof githubcomshakaprojectshakapackagerPackage
