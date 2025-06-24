/**
 * **fnm** - Package from pantry: crates.io/fnm
 *
 * @domain `crates.io/fnm`
 *
 * @install `launchpad install crates.io/fnm`
 * @dependencies `darwin:zlib.net^1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiofnm
 * console.log(pkg.name)        // "fnm"
 * console.log(pkg.description) // "Package from pantry: crates.io/fnm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fnm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiofnmPackage = {
  /**
   * The display name of this package.
   */
  name: 'fnm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fnm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/fnm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/fnm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/fnm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/fnm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fnm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiofnmPackage = typeof cratesiofnmPackage
