/**
 * **git-crypt** - pkgx package
 *
 * @domain `agwa.name/git-crypt`
 *
 * @install `launchpad install agwa.name/git-crypt`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.agwanamegitcrypt
 * console.log(pkg.name)        // "git-crypt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/agwa-name/git-crypt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agwanamegitcryptPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-crypt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'agwa.name/git-crypt' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install agwa.name/git-crypt' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +agwa.name/git-crypt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install agwa.name/git-crypt' as const,
}

export type AgwanamegitcryptPackage = typeof agwanamegitcryptPackage
