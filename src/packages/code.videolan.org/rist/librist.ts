/**
 * **rist** - Reliable Internet Stream Transport (RIST)
 *
 * @domain `code.videolan.org/rist/librist`
 * @programs `rist2rist`, `ristreceiver`, `ristsender`, `ristsrppasswd`
 * @version `0.2.11` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +code.videolan.org/rist/librist -- $SHELL -i`
 * @aliases `rist`
 * @dependencies `mesonbuild.com>=0.47<1`, `ninja-build.org@1`, `sourceware.org/libffi^3 # since 0.2.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.rist
 * // Or access via domain
 * const samePkg = pantry.codevideolanorgristlibrist
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "librist"
 * console.log(pkg.description) // "Reliable Internet Stream Transport (RIST)"
 * console.log(pkg.programs)    // ["rist2rist", "ristreceiver", ...]
 * console.log(pkg.versions[0]) // "0.2.11" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/rist/librist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ristPackage = {
  /**
   * The display name of this package.
   */
  name: 'librist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org/rist/librist' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Reliable Internet Stream Transport (RIST)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/code.videolan.org/rist/librist/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +code.videolan.org/rist/librist -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rist2rist',
    'ristreceiver',
    'ristsender',
    'ristsrppasswd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mesonbuild.com>=0.47<1',
    'ninja-build.org@1',
    'sourceware.org/libffi^3 # since 0.2.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.11',
    '0.2.8',
    '0.2.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'rist',
  ] as const,
}

export type RistPackage = typeof ristPackage
