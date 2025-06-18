/**
 * **md-tui** - Markdown renderer in the terminal
 *
 * @domain `crates.io/md-tui`
 * @programs `mdt`, `md-tui`
 * @version `0.8.7` (10 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/md-tui.md
 *
 * @install `sh <(curl https://pkgx.sh) +crates.io/md-tui -- $SHELL -i`
 * @aliases `md-tui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mdtui
 * // Or access via domain
 * const samePkg = pantry.cratesiomdtui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "crates.io/md-tui"
 * console.log(pkg.description) // "Markdown renderer in the terminal"
 * console.log(pkg.programs)    // ["mdt", "md-tui"]
 * console.log(pkg.versions[0]) // "0.8.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/md-tui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mdtuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'crates.io/md-tui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/md-tui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Markdown renderer in the terminal' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/md-tui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +crates.io/md-tui -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mdt',
    'md-tui',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.7',
    '0.8.6',
    '0.8.5',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.4',
    '0.7.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'md-tui',
  ] as const,
  fullPath: 'crates.io/md-tui' as const,
}

export type MdtuiPackage = typeof mdtuiPackage
