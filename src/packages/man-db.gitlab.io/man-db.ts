/**
 * **man-db** - Package from pantry: man-db.gitlab.io/man-db
 *
 * @domain `man-db.gitlab.io/man-db`
 *
 * @install `launchpad install man-db.gitlab.io/man-db`
 * @dependencies `libpipeline.gitlab.io/libpipeline`, `gnu.org/groff`, `linux:gnu.org/gdbm` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mandbgitlabiomandb
 * console.log(pkg.name)        // "man-db"
 * console.log(pkg.description) // "Package from pantry: man-db.gitlab.io/man-db"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/man-db-gitlab-io/man-db.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mandbgitlabiomandbPackage = {
  /**
   * The display name of this package.
   */
  name: 'man-db' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'man-db.gitlab.io/man-db' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: man-db.gitlab.io/man-db' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install man-db.gitlab.io/man-db' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +man-db.gitlab.io/man-db -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install man-db.gitlab.io/man-db' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libpipeline.gitlab.io/libpipeline',
    'gnu.org/groff',
    'linux:gnu.org/gdbm',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/man-db.gitlab.io/man-db/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MandbgitlabiomandbPackage = typeof mandbgitlabiomandbPackage
