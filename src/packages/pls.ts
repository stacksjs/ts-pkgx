/**
 * **pls** - pls is a prettier and powerful ls(1) for the pros.
 *
 * @domain `dhruvkb.dev/pls`
 * @programs `pls`
 * @version `2023.12.22` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/dhruvkb-dev/pls.md
 *
 * @install `sh <(curl https://pkgx.sh) pls`
 * @name `pls`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pls
 * // Or access via domain
 * const samePkg = pantry.dhruvkbdevpls
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pls"
 * console.log(pkg.description) // "pls is a prettier and powerful ls(1) for the pros."
 * console.log(pkg.programs)    // ["pls"]
 * console.log(pkg.versions[0]) // "2023.12.22" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dhruvkb-dev/pls.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plsPackage = {
  /**
   * The display name of this package.
   */
  name: 'pls' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dhruvkb.dev/pls' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'pls is a prettier and powerful ls(1) for the pros.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dhruvkb.dev/pls/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pls' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pls',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.12.22',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'dhruvkb.dev/pls' as const,
}

export type PlsPackage = typeof plsPackage
