/**
 * **orcc** - Oil Runtime Compiler (ORC)
 *
 * @domain `gstreamer.freedesktop.org/orc`
 * @programs `orcc`, `orc-bugreport`
 * @version `0.4.41` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install orcc`
 * @name `orcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.orcc
 * // Or access via domain
 * const samePkg = pantry.gstreamerfreedesktoporgorc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "orcc"
 * console.log(pkg.description) // "Oil Runtime Compiler (ORC)"
 * console.log(pkg.programs)    // ["orcc", "orc-bugreport"]
 * console.log(pkg.versions[0]) // "0.4.41" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gstreamer-freedesktop-org/orc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const orccPackage = {
  /**
   * The display name of this package.
   */
  name: 'orcc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gstreamer.freedesktop.org/orc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Oil Runtime Compiler (ORC)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gstreamer.freedesktop.org/orc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install orcc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'orcc',
    'orc-bugreport',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.41',
    '0.4.40',
    '0.4.39',
    '0.4.38',
    '0.4.37',
    '0.4.36',
    '0.4.35',
    '0.4.34',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gstreamer.freedesktop.org/orc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install orcc' as const,
}

export type OrccPackage = typeof orccPackage
