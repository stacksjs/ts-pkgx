/**
 * **cruft** - Allows you to maintain all the necessary cruft for packaging and building projects separate from the code you intentionally write. Built on-top of, and fully compatible with, CookieCutter.
 *
 * @domain `cruft.github.io`
 * @programs `cruft`
 * @version `2.16.0` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/cruft-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) cruft`
 * @name `cruft`
 * @dependencies `python.org>=3.7<3.12`, `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cruft
 * // Or access via domain
 * const samePkg = pantry.cruftgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cruft"
 * console.log(pkg.description) // "Allows you to maintain all the necessary cruft ..."
 * console.log(pkg.programs)    // ["cruft"]
 * console.log(pkg.versions[0]) // "2.16.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cruft-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cruftPackage = {
  /**
   * The display name of this package.
   */
  name: 'cruft' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cruft.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Allows you to maintain all the necessary cruft for packaging and building projects separate from the code you intentionally write. Built on-top of, and fully compatible with, CookieCutter.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cruft.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cruft' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cruft',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
    'git-scm.org^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.16.0',
    '2.15.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'cruft.github.io' as const,
}

export type CruftPackage = typeof cruftPackage
