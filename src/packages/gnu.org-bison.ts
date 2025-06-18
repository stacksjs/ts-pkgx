/**
 * **bison** - Parser generator
 *
 * @domain `gnu.org/bison`
 * @programs `bison`, `yacc`
 * @version `3.8.2` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bison.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/bison -- $SHELL -i`
 * @aliases `bison`
 * @dependencies `gnu.org/m4@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bison
 * // Or access via domain
 * const samePkg = pantry.gnuorgbison
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/bison"
 * console.log(pkg.description) // "Parser generator"
 * console.log(pkg.programs)    // ["bison", "yacc"]
 * console.log(pkg.versions[0]) // "3.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bison.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bisonPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/bison' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/bison' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Parser generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bison/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/bison -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bison',
    'yacc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/m4@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.8.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bison',
  ] as const,
  fullPath: 'gnu.org/bison' as const,
}

export type BisonPackage = typeof bisonPackage
