/**
 * **apu-{{** - Mirror of Apache Portable Runtime util
 *
 * @domain `apache.org/apr-util`
 * @programs `apu-{{ version.major }}-config`
 * @version `1.6.3` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/apache-org/apr-util.md
 *
 * @install `sh <(curl https://pkgx.sh) apu-{{ version.major }}-config`
 * @name `apu-{{ version.major }}-config`
 * @aliases `apu-{{`, `apr-util`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.apu
 * // Or access via domain
 * const samePkg = pantry.apacheorgaprutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "apu-{{ version.major }}-config"
 * console.log(pkg.description) // "Mirror of Apache Portable Runtime util"
 * console.log(pkg.programs)    // ["apu-{{ version.major }}-config"]
 * console.log(pkg.versions[0]) // "1.6.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/apr-util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apuPackage = {
  /**
   * The display name of this package.
   */
  name: 'apu-{{ version.major }}-config' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/apr-util' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mirror of Apache Portable Runtime util' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/apr-util/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) apu-{{ version.major }}-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'apu-{{ version.major }}-config',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'apr-util',
  ] as const,
  fullPath: 'apache.org/apr-util' as const,
}

export type ApuPackage = typeof apuPackage
