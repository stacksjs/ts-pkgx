/**
 * **tre** - Tree command, improved.
 *
 * @domain `github.com/dduan/tre`
 * @programs `tre`
 * @version `0.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) tre`
 * @name `tre`
 * @aliases `dduan/tre`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tre
 * // Or access via domain
 * const samePkg = pantry.githubcomdduantre
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tre"
 * console.log(pkg.description) // "Tree command, improved."
 * console.log(pkg.programs)    // ["tre"]
 * console.log(pkg.versions[0]) // "0.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dduan/tre.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const trePackage = {
  /**
   * The display name of this package.
   */
  name: 'tre' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dduan/tre' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tree command, improved.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dduan/tre/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tre' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tre',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'dduan/tre',
  ] as const,
  fullPath: 'github.com/dduan/tre' as const,
}

export type TrePackage = typeof trePackage
