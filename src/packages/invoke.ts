/**
 * **invoke** - Pythonic task management & command execution.
 *
 * @domain `pyinvoke.org`
 * @programs `invoke`
 * @version `2.2.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/pyinvoke-org.md
 *
 * @install `sh <(curl https://pkgx.sh) invoke`
 * @name `invoke`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.invoke
 * // Or access via domain
 * const samePkg = pantry.pyinvokeorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "invoke"
 * console.log(pkg.description) // "Pythonic task management & command execution."
 * console.log(pkg.programs)    // ["invoke"]
 * console.log(pkg.versions[0]) // "2.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pyinvoke-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const invokePackage = {
  /**
   * The display name of this package.
   */
  name: 'invoke' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pyinvoke.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pythonic task management & command execution.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pyinvoke.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) invoke' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'invoke',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'pyinvoke.org' as const,
}

export type InvokePackage = typeof invokePackage
