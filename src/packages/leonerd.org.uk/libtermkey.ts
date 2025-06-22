/**
 * **leonerd.org.uk/libtermkey** - pkgx package
 *
 * @domain `leonerd.org.uk/libtermkey`
 * @version `0.21.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install leonerd.org.uk/libtermkey`
 * @dependencies `github.com/neovim/unibilium`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leonerdorguklibtermkey
 * console.log(pkg.name)        // "leonerd.org.uk/libtermkey"
 * console.log(pkg.versions[0]) // "0.21.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leonerd-org-uk/libtermkey.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leonerdorguklibtermkeyPackage = {
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install leonerd.org.uk/libtermkey' as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +leonerd.org.uk/libtermkey -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install leonerd.org.uk/libtermkey' as const,
}

export type LeonerdorguklibtermkeyPackage = typeof leonerdorguklibtermkeyPackage
