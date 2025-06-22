/**
 * **libgcrypt** - Package from pantry: gnupg.org/libgcrypt
 *
 * @domain `gnupg.org/libgcrypt`
 *
 * @install `launchpad install gnupg.org/libgcrypt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorglibgcrypt
 * console.log(pkg.name)        // "libgcrypt"
 * console.log(pkg.description) // "Package from pantry: gnupg.org/libgcrypt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/libgcrypt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorglibgcryptPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgcrypt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/libgcrypt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org/libgcrypt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org/libgcrypt' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/libgcrypt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org/libgcrypt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libgcrypt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnupgorglibgcryptPackage = typeof gnupgorglibgcryptPackage
