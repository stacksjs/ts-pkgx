/**
 * **libtermkey** - Package from pantry: leonerd.org.uk/libtermkey
 *
 * @domain `leonerd.org.uk/libtermkey`
 *
 * @install `launchpad install leonerd.org.uk/libtermkey`
 * @dependencies `github.com/neovim/unibilium`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leonerdorguklibtermkey
 * console.log(pkg.name)        // "libtermkey"
 * console.log(pkg.description) // "Package from pantry: leonerd.org.uk/libtermkey"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leonerd-org-uk/libtermkey.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leonerdorguklibtermkeyPackage = {
  /**
   * The display name of this package.
   */
  name: 'libtermkey' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leonerd.org.uk/libtermkey' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: leonerd.org.uk/libtermkey' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install leonerd.org.uk/libtermkey' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +leonerd.org.uk/libtermkey -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install leonerd.org.uk/libtermkey' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leonerd.org.uk/libtermkey/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LeonerdorguklibtermkeyPackage = typeof leonerdorguklibtermkeyPackage
