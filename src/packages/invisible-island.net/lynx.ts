/**
 * **lynx** - Text-based web browser
 *
 * @domain `invisible-island.net/lynx`
 * @programs `lynx`
 * @version `2.9.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lynx`
 * @name `lynx`
 * @dependencies `openssl.org^3`, `invisible-island.net/ncurses^6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lynx
 * // Or access via domain
 * const samePkg = pantry.invisibleislandnetlynx
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lynx"
 * console.log(pkg.description) // "Text-based web browser"
 * console.log(pkg.programs)    // ["lynx"]
 * console.log(pkg.versions[0]) // "2.9.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/invisible-island-net/lynx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lynxPackage = {
  /**
   * The display name of this package.
   */
  name: 'lynx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'invisible-island.net/lynx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Text-based web browser' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/lynx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lynx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lynx',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^3',
    'invisible-island.net/ncurses^6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.9.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) lynx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lynx' as const,
}

export type LynxPackage = typeof lynxPackage
