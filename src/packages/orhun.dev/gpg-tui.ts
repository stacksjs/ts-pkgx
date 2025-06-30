/**
 * **gpg-tui** - Package from pantry: orhun.dev/gpg-tui
 *
 * @domain `orhun.dev/gpg-tui`
 *
 * @install `launchpad install orhun.dev/gpg-tui`
 * @dependencies `gnupg.org`, `gnupg.org/gpgme^1.12`, `gnupg.org/libgpg-error`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.orhundevgpgtui
 * console.log(pkg.name)        // "gpg-tui"
 * console.log(pkg.description) // "Package from pantry: orhun.dev/gpg-tui"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/orhun-dev/gpg-tui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const orhundevgpgtuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'gpg-tui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'orhun.dev/gpg-tui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: orhun.dev/gpg-tui' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install orhun.dev/gpg-tui' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +orhun.dev/gpg-tui -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install orhun.dev/gpg-tui' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnupg.org',
    'gnupg.org/gpgme^1.12',
    'gnupg.org/libgpg-error',
    'x.org/xcb',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/orhun.dev/gpg-tui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OrhundevgpgtuiPackage = typeof orhundevgpgtuiPackage
