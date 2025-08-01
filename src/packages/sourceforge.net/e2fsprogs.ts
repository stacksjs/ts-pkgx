/**
 * **e2fsprogs** - Package from pantry: sourceforge.net/e2fsprogs
 *
 * @domain `sourceforge.net/e2fsprogs`
 *
 * @install `launchpad install sourceforge.net/e2fsprogs`
 * @dependencies `darwin:gnu.org/gettext^0.22`, `linux:github.com/util-linux/util-linux^2.39` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenete2fsprogs
 * console.log(pkg.name)        // "e2fsprogs"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/e2fsprogs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/e2fsprogs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenete2fsprogsPackage = {
  /**
   * The display name of this package.
   */
  name: 'e2fsprogs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/e2fsprogs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/e2fsprogs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/e2fsprogs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/e2fsprogs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sourceforge.net/e2fsprogs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:gnu.org/gettext^0.22',
    'linux:github.com/util-linux/util-linux^2.39',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/e2fsprogs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Sourceforgenete2fsprogsPackage = typeof sourceforgenete2fsprogsPackage
