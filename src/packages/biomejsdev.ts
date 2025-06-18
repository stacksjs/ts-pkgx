/**
 * **biome** - A toolchain for web projects, aimed to provide functionalities to maintain them. Biome offers formatter and linter, usable via CLI and LSP.
 *
 * @domain `biomejs.dev`
 * @programs `biome`
 * @version `1.9.4` (28 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install biome`
 * @aliases `biome`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.biome
 * // Or access via domain
 * const samePkg = pantry.biomejsdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "biomejs.dev"
 * console.log(pkg.description) // "A toolchain for web projects, aimed to provide ..."
 * console.log(pkg.programs)    // ["biome"]
 * console.log(pkg.versions[0]) // "1.9.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/biomejs-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const biomePackage = {
  /**
   * The display name of this package.
   */
  name: 'biomejs.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'biomejs.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A toolchain for web projects, aimed to provide functionalities to maintain them. Biome offers formatter and linter, usable via CLI and LSP.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/biomejs.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install biome' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'biome',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.9.4',
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.3',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.4',
    '1.6.3',
    '1.6.2',
    '1.6.1',
    '1.6.0',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.1',
    '1.4.0',
    '1.3.3',
    '1.3.1',
    '1.3.0',
    '1.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'biome',
  ] as const,
}

export type BiomePackage = typeof biomePackage
