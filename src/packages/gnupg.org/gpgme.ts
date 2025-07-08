/**
 * **gpgme** - Package from pantry: gnupg.org/gpgme
 *
 * @domain `gnupg.org/gpgme`
 *
 * @install `launchpad install gnupg.org/gpgme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorggpgme
 * console.log(pkg.name)        // "gpgme"
 * console.log(pkg.description) // "Package from pantry: gnupg.org/gpgme"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/gpgme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorggpgmePackage = {
  /**
   * The display name of this package.
   */
  name: 'gpgme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/gpgme' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org/gpgme' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org/gpgme' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/gpgme -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org/gpgme' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/gpgme/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnupgorggpgmePackage = typeof gnupgorggpgmePackage
