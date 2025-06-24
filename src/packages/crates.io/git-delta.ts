/**
 * **git-delta** - Package from pantry: crates.io/git-delta
 *
 * @domain `crates.io/git-delta`
 *
 * @install `launchpad install crates.io/git-delta`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`, `darwin:zlib.net^1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitdelta
 * console.log(pkg.name)        // "git-delta"
 * console.log(pkg.description) // "Package from pantry: crates.io/git-delta"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-delta.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitdeltaPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-delta' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-delta' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/git-delta' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/git-delta' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/git-delta -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/git-delta' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
    'darwin:zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-delta/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogitdeltaPackage = typeof cratesiogitdeltaPackage
