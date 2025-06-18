/**
 * **git-credential-manager** - Secure, cross-platform Git credential storage with authentication to GitHub, Azure Repos, and other popular Git hosting services.
 *
 * @domain `github.com/git-ecosystem/git-credential-manager`
 * @programs `git-credential-manager`
 * @version `2.6.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) git-credential-manager`
 * @name `git-credential-manager`
 * @aliases `git-ecosystem/git-credential-manager`
 * @dependencies `openssl.org^1.1.1`, `unicode.org^71`, `zlib.net^1.3`, ... (+1 more)
 * @companions `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitcredentialmanager
 * // Or access via domain
 * const samePkg = pantry.githubcomgitecosystemgitcredentialmanager
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-credential-manager"
 * console.log(pkg.description) // "Secure, cross-platform Git credential storage w..."
 * console.log(pkg.programs)    // ["git-credential-manager"]
 * console.log(pkg.versions[0]) // "2.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/git-ecosystem/git-credential-manager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitcredentialmanagerPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-credential-manager' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/git-ecosystem/git-credential-manager' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Secure, cross-platform Git credential storage with authentication to GitHub, Azure Repos, and other popular Git hosting services.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/git-ecosystem/git-credential-manager/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git-credential-manager' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-credential-manager',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'git-scm.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1.1',
    'unicode.org^71',
    'zlib.net^1.3',
    'dotnet.microsoft.com^8.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'git-ecosystem/git-credential-manager',
  ] as const,
  fullPath: 'github.com/git-ecosystem/git-credential-manager' as const,
}

export type GitcredentialmanagerPackage = typeof gitcredentialmanagerPackage
