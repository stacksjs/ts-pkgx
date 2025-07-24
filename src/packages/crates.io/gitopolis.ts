/**
 * **gitopolis** - Package from pantry: crates.io/gitopolis
 *
 * @domain `crates.io/gitopolis`
 *
 * @install `launchpad install crates.io/gitopolis`
 * @dependencies `openssl.org^1.1`, `zlib.net^1`, `git-scm.org^2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitopolis
 * console.log(pkg.name)        // "gitopolis"
 * console.log(pkg.description) // "Package from pantry: crates.io/gitopolis"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/gitopolis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitopolisPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitopolis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/gitopolis' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/gitopolis' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/gitopolis' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/gitopolis -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/gitopolis' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1',
    'git-scm.org^2',
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/gitopolis/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogitopolisPackage = typeof cratesiogitopolisPackage
