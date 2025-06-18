/**
 * **zola** - A fast static site generator in a single binary with everything built-in. https://www.getzola.org
 *
 * @domain `getzola.org`
 * @programs `zola`
 * @version `0.20.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) zola`
 * @name `zola`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zola
 * // Or access via domain
 * const samePkg = pantry.getzolaorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zola"
 * console.log(pkg.description) // "A fast static site generator in a single binary..."
 * console.log(pkg.programs)    // ["zola"]
 * console.log(pkg.versions[0]) // "0.20.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getzola-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zolaPackage = {
  /**
   * The display name of this package.
   */
  name: 'zola' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getzola.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast static site generator in a single binary with everything built-in. https://www.getzola.org' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getzola.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) zola' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zola',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.20.0',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.0',
    '0.17.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'zola' as const,
}

export type ZolaPackage = typeof zolaPackage
