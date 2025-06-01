/**
 * **cask** - Project management tool for Emacs
 *
 * @domain `cask.readthedocs.io`
 * @programs `cask`
 * @version `0.9.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/cask-readthedocs-io.md
 *
 * @install `sh <(curl https://pkgx.sh) cask`
 * @name `cask`
 * @dependencies `gnu.org/coreutils`, `gnu.org/emacs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cask
 * // Or access via domain
 * const samePkg = pantry.caskreadthedocsio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cask"
 * console.log(pkg.description) // "Project management tool for Emacs"
 * console.log(pkg.programs)    // ["cask"]
 * console.log(pkg.versions[0]) // "0.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cask-readthedocs-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caskPackage = {
  /**
   * The display name of this package.
   */
  name: 'cask' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cask.readthedocs.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Project management tool for Emacs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cask.readthedocs.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) cask' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cask',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/coreutils',
    'gnu.org/emacs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'cask.readthedocs.io' as const,
}

export type CaskPackage = typeof caskPackage
