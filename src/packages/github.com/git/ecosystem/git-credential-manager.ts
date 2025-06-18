/**
 * **github.com/git-ecosystem/git-credential-manager** - pkgx package
 *
 * @domain `github.com/git/ecosystem/git-credential-manager`
 *
 * @install `pkgx github.com/git-ecosystem/git-credential-manager`
 * @aliases `github.com/git-ecosystem/git-credential-manager`, `git-ecosystem/git-credential-manager`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomgitecosystemgitcredentialmanager
 * // Or access via domain
 * const samePkg = pantry.githubcomgitecosystemgitcredentialmanager
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-ecosystem"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/git/ecosystem/git-credential-manager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgitecosystemgitcredentialmanagerPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-ecosystem' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/git/ecosystem/git-credential-manager' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/git-ecosystem/git-credential-manager' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/git-ecosystem/git-credential-manager',
    'git-ecosystem/git-credential-manager',
  ] as const,
  fullPath: 'github.com/git-ecosystem/git-credential-manager' as const,
}

export type GithubcomgitecosystemgitcredentialmanagerPackage = typeof githubcomgitecosystemgitcredentialmanagerPackage
