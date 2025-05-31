/**
 * **assimp** - The official Open-Asset-Importer-Library Repository. Loads 40+ 3D-file-formats into one unified and clean data structure.
 *
 * @domain `assimp.org`
 * @programs `assimp`
 * @version `5.4.3` (7 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/assimp-org.md
 * @install `sh <(curl https://pkgx.sh) assimp`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.assimporg
 * console.log(pkg.name)        // "assimp"
 * console.log(pkg.description) // "The official Open-Asset-Importer-Library Reposi..."
 * console.log(pkg.programs)    // ["assimp"]
 * console.log(pkg.versions[0]) // "5.4.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/assimp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const assimporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'assimp' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) assimp' as const,
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
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.4.3',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.3.1',
    '5.3.0',
    '5.2.5',
  ] as const,
  fullPath: 'assimp.org' as const,
  aliases: [] as const,
}

export type AssimporgPackage = typeof assimporgPackage
