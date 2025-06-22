/**
 * **faad** - Freeware Advanced Audio (AAC) Decoder faad2 mirror
 *
 * @domain `sourceforge.net/faad2`
 * @programs `faad`
 * @version `2.11.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install faad`
 * @name `faad`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.faad
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetfaad2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "faad"
 * console.log(pkg.description) // "Freeware Advanced Audio (AAC) Decoder faad2 mirror"
 * console.log(pkg.programs)    // ["faad"]
 * console.log(pkg.versions[0]) // "2.11.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/faad2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const faadPackage = {
  /**
   * The display name of this package.
   */
  name: 'faad' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/faad2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Freeware Advanced Audio (AAC) Decoder faad2 mirror' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/faad2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install faad' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'faad',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.11.2',
    '2.11.1',
    '2.11.0',
    '2.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) faad -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install faad' as const,
}

export type FaadPackage = typeof faadPackage
