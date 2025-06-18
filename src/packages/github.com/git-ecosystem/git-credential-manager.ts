/**
 * **git-credential-manager** - Package from pantry: github.com/git-ecosystem/git-credential-manager
 *
 * @domain `github.com/git-ecosystem/git-credential-manager`
 *
 * @install `launchpad install github.com/git-ecosystem/git-credential-manager`
 * @dependencies `openssl.org^1.1.1`, `unicode.org^71`, `zlib.net^1.3`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgitecosystemgitcredentialmanager
 * console.log(pkg.name)        // "git-credential-manager"
 * console.log(pkg.description) // "Package from pantry: github.com/git-ecosystem/g..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/git-ecosystem/git-credential-manager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgitecosystemgitcredentialmanagerPackage = {
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
  description: 'Package from pantry: github.com/git-ecosystem/git-credential-manager' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/git-ecosystem/git-credential-manager' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1.1',
    'unicode.org^71',
    'zlib.net^1.3',
    'dotnet.microsoft.com^8.0',
    'git-scm.org^2.27.0',
    'kerberos.org^1.21.3',
    'gnu.org/gcc>=12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/git-ecosystem/git-credential-manager/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgitecosystemgitcredentialmanagerPackage = typeof githubcomgitecosystemgitcredentialmanagerPackage
