/**
 * **libgpg-error** - Package from pantry: gnupg.org/libgpg-error
 *
 * @domain `gnupg.org/libgpg-error`
 *
 * @install `launchpad install gnupg.org/libgpg-error`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorglibgpgerror
 * console.log(pkg.name)        // "libgpg-error"
 * console.log(pkg.description) // "Package from pantry: gnupg.org/libgpg-error"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/libgpg-error.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorglibgpgerrorPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgpg-error' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/libgpg-error' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org/libgpg-error' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org/libgpg-error' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/libgpg-error -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org/libgpg-error' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libgpg-error/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnupgorglibgpgerrorPackage = typeof gnupgorglibgpgerrorPackage
