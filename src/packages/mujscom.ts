/**
 * **mujs.com** - Package from pantry: mujs.com
 *
 * @domain `mujs.com`
 *
 * @install `launchpad install mujs.com`
 * @dependencies `gnu.org/readline~8.1`, `linux:invisible-island.net/ncurses` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mujscom
 * console.log(pkg.name)        // "mujs.com"
 * console.log(pkg.description) // "Package from pantry: mujs.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mujs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mujscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mujs.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mujs.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mujs.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mujs.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mujs.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mujs.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnu.org/readline~8.1',
    'linux:invisible-island.net/ncurses',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mujs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MujscomPackage = typeof mujscomPackage
