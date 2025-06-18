/**
 * **htop.dev** - Package from pantry: htop.dev
 *
 * @domain `htop.dev`
 *
 * @install `launchpad install htop.dev`
 * @dependencies `invisible-island.net/ncurses^6`, `gnu.org/autoconf`, `gnu.org/automake`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.htopdev
 * console.log(pkg.name)        // "htop.dev"
 * console.log(pkg.description) // "Package from pantry: htop.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/htop-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const htopdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'htop.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'htop.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: htop.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install htop.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses^6',
    'gnu.org/autoconf',
    'gnu.org/automake',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/htop.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HtopdevPackage = typeof htopdevPackage
