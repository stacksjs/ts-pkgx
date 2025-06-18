/**
 * **cask.readthedocs.io** - Package from pantry: cask.readthedocs.io
 *
 * @domain `cask.readthedocs.io`
 *
 * @install `launchpad install cask.readthedocs.io`
 * @dependencies `gnu.org/coreutils`, `gnu.org/emacs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.caskreadthedocsio
 * console.log(pkg.name)        // "cask.readthedocs.io"
 * console.log(pkg.description) // "Package from pantry: cask.readthedocs.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cask-readthedocs-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caskreadthedocsioPackage = {
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
  description: 'Package from pantry: cask.readthedocs.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install cask.readthedocs.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/coreutils',
    'gnu.org/emacs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cask.readthedocs.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CaskreadthedocsioPackage = typeof caskreadthedocsioPackage
