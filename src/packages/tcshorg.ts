/**
 * **tcsh.org** - Package from pantry: tcsh.org
 *
 * @domain `tcsh.org`
 *
 * @install `launchpad install tcsh.org`
 * @dependencies `github.com/besser82/libxcrypt@4`, `invisible-island.net/ncurses@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcshorg
 * console.log(pkg.name)        // "tcsh.org"
 * console.log(pkg.description) // "Package from pantry: tcsh.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcsh-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcshorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tcsh.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcsh.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tcsh.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tcsh.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tcsh.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tcsh.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/besser82/libxcrypt@4',
    'invisible-island.net/ncurses@6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcsh.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TcshorgPackage = typeof tcshorgPackage
