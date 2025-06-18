/**
 * **cask** - Project management tool for Emacs
 *
 * @domain `cask.readthedocs.io`
 * @programs `cask`
 * @version `0.9.1` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cask`
 * @aliases `cask`
 * @dependencies `gnu.org/coreutils`, `gnu.org/emacs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cask
 * // Or access via domain
 * const samePkg = pantry.caskreadthedocsio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cask.readthedocs.io"
 * console.log(pkg.description) // "Project management tool for Emacs"
 * console.log(pkg.programs)    // ["cask"]
 * console.log(pkg.versions[0]) // "0.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cask-readthedocs-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caskPackage = {
  /**
   * The display name of this package.
   */
  name: 'cask.readthedocs.io' as const,
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
  installCommand: 'launchpad install cask' as const,
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
    '0.9.1',
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cask',
  ] as const,
}

export type CaskPackage = typeof caskPackage
