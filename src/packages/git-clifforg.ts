/**
 * **git-cliff.org** - Package from pantry: git-cliff.org
 *
 * @domain `git-cliff.org`
 *
 * @install `launchpad install git-cliff.org`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitclifforg
 * console.log(pkg.name)        // "git-cliff.org"
 * console.log(pkg.description) // "Package from pantry: git-cliff.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-cliff-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitclifforgPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-cliff.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-cliff.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: git-cliff.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git-cliff.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +git-cliff.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git-cliff.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-cliff.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitclifforgPackage = typeof gitclifforgPackage
