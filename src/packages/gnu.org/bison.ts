/**
 * **bison** - Parser generator
 *
 * @domain `gnu.org/bison`
 * @programs `bison`, `yacc`
 * @version `3.8.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/bison -- $SHELL -i`
 * @dependencies `gnu.org/m4@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgbison
 * console.log(pkg.name)        // "bison"
 * console.log(pkg.description) // "Parser generator"
 * console.log(pkg.programs)    // ["bison", "yacc"]
 * console.log(pkg.versions[0]) // "3.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bison.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgbisonPackage = {
  /**
   * The display name of this package.
   */
  name: 'bison' as const,
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
  installCommand: 'launchpad install +gnu.org/bison -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type GnuorgbisonPackage = typeof gnuorgbisonPackage
