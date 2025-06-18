/**
 * **musepack.net** - Audio compression format and tools
 *
 * @domain `musepack.net`
 * @programs `mpc2sv8`, `mpcchap`, `mpccut`, `mpcdec`, `mpcenc`, ... (+2 more)
 * @version `475.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +musepack.net -- $SHELL -i`
 * @dependencies `musepack.net/libreplaygain`, `musepack.net/libcuefile`, `cmake.org`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musepacknet
 * console.log(pkg.name)        // "musepack.net"
 * console.log(pkg.description) // "Audio compression format and tools"
 * console.log(pkg.programs)    // ["mpc2sv8", "mpcchap", ...]
 * console.log(pkg.versions[0]) // "475.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musepack-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musepacknetPackage = {
  /**
   * The display name of this package.
   */
  name: 'musepack.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musepack.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Audio compression format and tools' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musepack.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +musepack.net -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mpc2sv8',
    'mpcchap',
    'mpccut',
    'mpcdec',
    'mpcenc',
    'mpcgain',
    'wavcmp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'musepack.net/libreplaygain',
    'musepack.net/libcuefile',
    'cmake.org',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '475.0.0',
  ] as const,
  aliases: [] as const,
}

export type MusepacknetPackage = typeof musepacknetPackage
