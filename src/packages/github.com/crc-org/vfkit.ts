/**
 * **vfkit** - pkgx package
 *
 * @domain `github.com/crc-org/vfkit`
 * @programs `vfkit`
 * @version `0.6.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install vfkit`
 * @name `vfkit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vfkit
 * // Or access via domain
 * const samePkg = pantry.githubcomcrcorgvfkit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vfkit"
 * console.log(pkg.programs)    // ["vfkit"]
 * console.log(pkg.versions[0]) // "0.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/crc-org/vfkit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vfkitPackage = {
  /**
   * The display name of this package.
   */
  name: 'vfkit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/crc-org/vfkit' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/crc-org/vfkit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vfkit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vfkit',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.1',
    '0.6.0',
    '0.5.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type VfkitPackage = typeof vfkitPackage
