/**
 * **mods** - AI on the command line
 *
 * @domain `charm.sh/mods`
 * @programs `mods`
 * @version `1.7.0` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) mods`
 * @name `mods`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mods
 * // Or access via domain
 * const samePkg = pantry.charmshmods
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mods"
 * console.log(pkg.description) // "AI on the command line"
 * console.log(pkg.programs)    // ["mods"]
 * console.log(pkg.versions[0]) // "1.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/mods.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const modsPackage = {
  /**
   * The display name of this package.
   */
  name: 'mods' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/mods' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'AI on the command line' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/mods/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mods' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mods',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.0',
    '1.6.0',
    '1.5.0',
    '1.4.1',
    '1.4.0',
    '1.3.1',
    '1.3.0',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.0',
    '1.0.0',
    '0.2.0',
    '0.1.1',
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'charm.sh/mods' as const,
}

export type ModsPackage = typeof modsPackage
