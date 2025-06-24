/**
 * **git-trim** - Package from pantry: crates.io/git-trim
 *
 * @domain `crates.io/git-trim`
 *
 * @install `launchpad install crates.io/git-trim`
 * @dependencies `openssl.org^1.1`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogittrim
 * console.log(pkg.name)        // "git-trim"
 * console.log(pkg.description) // "Package from pantry: crates.io/git-trim"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-trim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogittrimPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-trim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-trim' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/git-trim' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/git-trim' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/git-trim -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/git-trim' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-trim/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogittrimPackage = typeof cratesiogittrimPackage
