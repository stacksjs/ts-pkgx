/**
 * **clisp** - GNU CLISP, a Common Lisp implementation
 *
 * @domain `clisp.org`
 * @programs `clisp`
 * @version `2.49.92` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) clisp`
 * @name `clisp`
 * @dependencies `gnu.org/libsigsegv^2.14`, `gnu.org/readline^8.2`, `github.com/besser82/libxcrypt^4.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.clisp
 * // Or access via domain
 * const samePkg = pantry.clisporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "clisp"
 * console.log(pkg.description) // "GNU CLISP, a Common Lisp implementation"
 * console.log(pkg.programs)    // ["clisp"]
 * console.log(pkg.versions[0]) // "2.49.92" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/clisp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const clispPackage = {
  /**
   * The display name of this package.
   */
  name: 'clisp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'clisp.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GNU CLISP, a Common Lisp implementation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/clisp.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) clisp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'clisp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libsigsegv^2.14',
    'gnu.org/readline^8.2',
    'github.com/besser82/libxcrypt^4.4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.49.92',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'clisp' as const,
}

export type ClispPackage = typeof clispPackage
