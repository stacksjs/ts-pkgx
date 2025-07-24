/**
 * **exa** - Package from pantry: crates.io/exa
 *
 * @domain `crates.io/exa`
 *
 * @install `launchpad install crates.io/exa`
 * @dependencies `darwin:zlib.net^1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioexa
 * console.log(pkg.name)        // "exa"
 * console.log(pkg.description) // "Package from pantry: crates.io/exa"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/exa.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioexaPackage = {
  /**
   * The display name of this package.
   */
  name: 'exa' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/exa' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/exa' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/exa' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/exa -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/exa' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/exa/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioexaPackage = typeof cratesioexaPackage
