/**
 * **mujs** - An embeddable Javascript interpreter in C.
 *
 * @domain `mujs.com`
 * @programs `mujs`, `mujs-pp`
 * @version `1.3.7` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mujs`
 * @name `mujs`
 * @dependencies `gnu.org/readline~8.1`, `linux:invisible-island.net/ncurses` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mujs
 * // Or access via domain
 * const samePkg = pantry.mujscom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mujs"
 * console.log(pkg.description) // "An embeddable Javascript interpreter in C."
 * console.log(pkg.programs)    // ["mujs", "mujs-pp"]
 * console.log(pkg.versions[0]) // "1.3.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mujs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mujsPackage = {
  /**
   * The display name of this package.
   */
  name: 'mujs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mujs.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An embeddable Javascript interpreter in C.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mujs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mujs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mujs',
    'mujs-pp',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.7',
    '1.3.6',
    '1.3.5',
    '1.3.4',
    '1.3.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mujs.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mujs' as const,
}

export type MujsPackage = typeof mujsPackage
