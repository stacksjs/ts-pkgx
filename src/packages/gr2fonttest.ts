/**
 * **gr2fonttest** - Graphite is a "smart font" system developed specifically to handle the complexities of lesser-known languages of the world.
 *
 * @domain `graphite.sil.org`
 * @programs `gr2fonttest`
 * @version `1.3.14` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) gr2fonttest`
 * @name `gr2fonttest`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gr2fonttest
 * // Or access via domain
 * const samePkg = pantry.graphitesilorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gr2fonttest"
 * console.log(pkg.description) // "Graphite is a "smart font" system developed spe..."
 * console.log(pkg.programs)    // ["gr2fonttest"]
 * console.log(pkg.versions[0]) // "1.3.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphite-sil-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gr2fonttestPackage = {
  /**
   * The display name of this package.
   */
  name: 'gr2fonttest' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphite.sil.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Graphite is a "smart font" system developed specifically to handle the complexities of lesser-known languages of the world.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/graphite.sil.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gr2fonttest' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gr2fonttest',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.14',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'graphite.sil.org' as const,
}

export type Gr2fonttestPackage = typeof gr2fonttestPackage
