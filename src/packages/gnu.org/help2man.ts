/**
 * **help2man** - Automatically generate simple man pages
 *
 * @domain `gnu.org/help2man`
 * @programs `help2man`
 * @version `1.49.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) help2man`
 * @name `help2man`
 * @dependencies `gnu.org/gettext`, `perl.org@5.38`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.help2man
 * // Or access via domain
 * const samePkg = pantry.gnuorghelp2man
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "help2man"
 * console.log(pkg.description) // "Automatically generate simple man pages"
 * console.log(pkg.programs)    // ["help2man"]
 * console.log(pkg.versions[0]) // "1.49.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/help2man.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const help2manPackage = {
  /**
   * The display name of this package.
   */
  name: 'help2man' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/help2man' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Automatically generate simple man pages' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/help2man/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) help2man' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'help2man',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'perl.org@5.38',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.49.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gnu.org/help2man' as const,
}

export type Help2manPackage = typeof help2manPackage
