/**
 * **getfoundry.sh** - Package from pantry: getfoundry.sh
 *
 * @domain `getfoundry.sh`
 *
 * @install `launchpad install getfoundry.sh`
 * @dependencies `git-scm.org^2`, `rust-lang.org^1.74 # edition: 2021`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getfoundrysh
 * console.log(pkg.name)        // "getfoundry.sh"
 * console.log(pkg.description) // "Package from pantry: getfoundry.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getfoundry-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getfoundryshPackage = {
  /**
   * The display name of this package.
   */
  name: 'getfoundry.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getfoundry.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: getfoundry.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install getfoundry.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org^2',
    'rust-lang.org^1.74 # edition: 2021',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getfoundry.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GetfoundryshPackage = typeof getfoundryshPackage
