/**
 * **assimp** - The official Open-Asset-Importer-Library Repository. Loads 40+ 3D-file-formats into one unified and clean data structure.
 *
 * @domain `assimp.org`
 * @programs `assimp`
 * @version `6.0.2` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install assimp`
 * @aliases `assimp`
 * @dependencies `zlib.net`, `gnu.org/make`, `cmake.org`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.assimp
 * // Or access via domain
 * const samePkg = pantry.assimporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "assimp.org"
 * console.log(pkg.description) // "The official Open-Asset-Importer-Library Reposi..."
 * console.log(pkg.programs)    // ["assimp"]
 * console.log(pkg.versions[0]) // "6.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/assimp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const assimpPackage = {
  /**
   * The display name of this package.
   */
  name: 'assimp.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'assimp.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The official Open-Asset-Importer-Library Repository. Loads 40+ 3D-file-formats into one unified and clean data structure.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/assimp.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install assimp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'assimp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
    'gnu.org/make',
    'cmake.org',
    'ninja-build.org',
    'curl.se',
    'gnu.org/patch',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.2',
    '6.0.1',
    '5.4.3',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.3.1',
    '5.3.0',
    '5.2.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'assimp',
  ] as const,
}

export type AssimpPackage = typeof assimpPackage
