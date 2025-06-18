/**
 * **git-crypt** - Enable transparent encryption/decryption of files in a git repo
 *
 * @domain `agwa.name/git-crypt`
 * @programs `git-crypt`
 * @version `0.7.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) git-crypt`
 * @name `git-crypt`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitcrypt
 * // Or access via domain
 * const samePkg = pantry.agwanamegitcrypt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-crypt"
 * console.log(pkg.description) // "Enable transparent encryption/decryption of fil..."
 * console.log(pkg.programs)    // ["git-crypt"]
 * console.log(pkg.versions[0]) // "0.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/agwa-name/git-crypt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitcryptPackage = {
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
  description: 'Enable transparent encryption/decryption of files in a git repo' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/agwa.name/git-crypt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git-crypt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-crypt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'agwa.name/git-crypt' as const,
}

export type GitcryptPackage = typeof gitcryptPackage
