/**
 * **get-blessed** - Package from pantry: crates.io/get-blessed
 *
 * @domain `crates.io/get-blessed`
 *
 * @install `launchpad install crates.io/get-blessed`
 * @dependencies `linux:openssl.org` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogetblessed
 * console.log(pkg.name)        // "get-blessed"
 * console.log(pkg.description) // "Package from pantry: crates.io/get-blessed"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/get-blessed.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogetblessedPackage = {
  /**
   * The display name of this package.
   */
  name: 'get-blessed' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/get-blessed' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/get-blessed' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/get-blessed' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/get-blessed -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/get-blessed' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:openssl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/get-blessed/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogetblessedPackage = typeof cratesiogetblessedPackage
