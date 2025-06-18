/**
 * **yadm** - Yet Another Dotfiles Manager
 *
 * @domain `yadm.io`
 * @programs `yadm`
 * @version `3.5.0` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/yadm-io.md
 *
 * @install `sh <(curl https://pkgx.sh) yadm`
 * @name `yadm`
 * @dependencies `git-scm.org`, `gnu.org/bash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yadm
 * // Or access via domain
 * const samePkg = pantry.yadmio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yadm"
 * console.log(pkg.description) // "Yet Another Dotfiles Manager"
 * console.log(pkg.programs)    // ["yadm"]
 * console.log(pkg.versions[0]) // "3.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yadm-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yadmPackage = {
  /**
   * The display name of this package.
   */
  name: 'yadm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yadm.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Yet Another Dotfiles Manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yadm.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) yadm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yadm',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
    'gnu.org/bash',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.0',
    '3.4.0',
    '3.3.0',
    '3.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'yadm.io' as const,
}

export type YadmPackage = typeof yadmPackage
