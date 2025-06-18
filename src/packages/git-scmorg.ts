/**
 * **git-scm.org** - Package from pantry: git-scm.org
 *
 * @domain `git-scm.org`
 *
 * @install `launchpad install git-scm.org`
 * @dependencies `zlib.net^1`, `gnu.org/gettext^0.21`, `curl.se>=5`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitscmorg
 * console.log(pkg.name)        // "git-scm.org"
 * console.log(pkg.description) // "Package from pantry: git-scm.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-scm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitscmorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-scm.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-scm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: git-scm.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install git-scm.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'gnu.org/gettext^0.21',
    'curl.se>=5',
    'curl.se/ca-certs',
    'perl.org',
    'libexpat.github.io~2',
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-scm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitscmorgPackage = typeof gitscmorgPackage
