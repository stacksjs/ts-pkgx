/**
 * **libksba** - Package from pantry: gnupg.org/libksba
 *
 * @domain `gnupg.org/libksba`
 *
 * @install `launchpad install gnupg.org/libksba`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorglibksba
 * console.log(pkg.name)        // "libksba"
 * console.log(pkg.description) // "Package from pantry: gnupg.org/libksba"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/libksba.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorglibksbaPackage = {
  /**
   * The display name of this package.
   */
  name: 'libksba' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/libksba' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org/libksba' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org/libksba' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/libksba -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org/libksba' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libksba/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnupgorglibksbaPackage = typeof gnupgorglibksbaPackage
