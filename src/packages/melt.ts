/**
 * **melt** - Author, manage, and run multitrack audio/video compositions
 *
 * @domain `charm.sh/melt`
 * @programs `melt`
 * @version `0.6.2` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/melt.md
 *
 * @install `sh <(curl https://pkgx.sh) melt`
 * @name `melt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.melt
 * // Or access via domain
 * const samePkg = pantry.charmshmelt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "melt"
 * console.log(pkg.description) // "Author, manage, and run multitrack audio/video ..."
 * console.log(pkg.programs)    // ["melt"]
 * console.log(pkg.versions[0]) // "0.6.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/melt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const meltPackage = {
  /**
   * The display name of this package.
   */
  name: 'melt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/melt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Author, manage, and run multitrack audio/video compositions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/melt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) melt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'melt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'charm.sh/melt' as const,
}

export type MeltPackage = typeof meltPackage
