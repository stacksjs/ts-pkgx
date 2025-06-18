/**
 * **pre-commit.com** - Package from pantry: pre-commit.com
 *
 * @domain `pre-commit.com`
 *
 * @install `launchpad install pre-commit.com`
 * @dependencies `python.org>=3.8<3.12`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.precommitcom
 * console.log(pkg.name)        // "pre-commit.com"
 * console.log(pkg.description) // "Package from pantry: pre-commit.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pre-commit-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const precommitcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'pre-commit.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pre-commit.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pre-commit.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pre-commit.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.8<3.12',
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pre-commit.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PrecommitcomPackage = typeof precommitcomPackage
