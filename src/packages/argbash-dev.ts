/**
 * **argbash** - Bash argument parsing code generator
 *
 * @domain `argbash.dev`
 * @programs `argbash`, `argbash-init`, `argbash-1to2`
 * @version `2.11.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +argbash.dev -- $SHELL -i`
 * @name `argbash`
 * @dependencies `gnu.org/bash>=3`, `gnu.org/autoconf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.argbash
 * // Or access via domain
 * const samePkg = pantry.argbashdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "argbash"
 * console.log(pkg.description) // "Bash argument parsing code generator"
 * console.log(pkg.programs)    // ["argbash", "argbash-init", ...]
 * console.log(pkg.versions[0]) // "2.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/argbash-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argbashPackage = {
  /**
   * The display name of this package.
   */
  name: 'argbash' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'argbash.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Bash argument parsing code generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/argbash.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +argbash.dev -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'argbash',
    'argbash-init',
    'argbash-1to2',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash>=3',
    'gnu.org/autoconf',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.11.0',
    '2.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'argbash.dev' as const,
}

export type ArgbashPackage = typeof argbashPackage
