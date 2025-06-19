/**
 * **delta** - A syntax-highlighting pager for git, diff, grep, and blame output
 *
 * @domain `crates.io/git-delta`
 * @programs `delta`
 * @version `0.18.2` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install delta`
 * @aliases `delta`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`, `darwin:zlib.net^1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.delta
 * // Or access via domain
 * const samePkg = pantry.cratesiogitdelta
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-delta"
 * console.log(pkg.description) // "A syntax-highlighting pager for git, diff, grep..."
 * console.log(pkg.programs)    // ["delta"]
 * console.log(pkg.versions[0]) // "0.18.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-delta.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const deltaPackage = {
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
  description: 'A syntax-highlighting pager for git, diff, grep, and blame output' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-delta/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install delta' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'delta',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.0',
    '0.16.5',
    '0.16.4',
    '0.16.3',
    '0.16.2',
    '0.16.1',
    '0.16.0',
    '0.15.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'delta',
  ] as const,
}

export type DeltaPackage = typeof deltaPackage
