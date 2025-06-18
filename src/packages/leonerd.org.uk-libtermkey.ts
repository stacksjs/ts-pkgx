/**
 * **libtermkey** - pkgx package
 *
 * @domain `leonerd.org.uk/libtermkey`
 * @version `0.21.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/leonerd-org-uk/libtermkey.md
 *
 * @install `sh <(curl https://pkgx.sh) +leonerd.org.uk/libtermkey -- $SHELL -i`
 * @aliases `libtermkey`
 * @dependencies `github.com/neovim/unibilium`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libtermkey
 * // Or access via domain
 * const samePkg = pantry.leonerdorguklibtermkey
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "leonerd.org.uk/libtermkey"
 * console.log(pkg.versions[0]) // "0.21.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leonerd-org-uk/libtermkey.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libtermkeyPackage = {
  /**
   * The display name of this package.
   */
  name: 'leonerd.org.uk/libtermkey' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leonerd.org.uk/libtermkey' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leonerd.org.uk/libtermkey/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +leonerd.org.uk/libtermkey -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/neovim/unibilium',
    'invisible-island.net/ncurses',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libtermkey',
  ] as const,
  fullPath: 'leonerd.org.uk/libtermkey' as const,
}

export type LibtermkeyPackage = typeof libtermkeyPackage
