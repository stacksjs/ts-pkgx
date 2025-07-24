/**
 * **qsv** - Package from pantry: crates.io/qsv
 *
 * @domain `crates.io/qsv`
 *
 * @install `launchpad install crates.io/qsv`
 * @dependencies `linux:wayland.freedesktop.org` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioqsv
 * console.log(pkg.name)        // "qsv"
 * console.log(pkg.description) // "Package from pantry: crates.io/qsv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/qsv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioqsvPackage = {
  /**
   * The display name of this package.
   */
  name: 'qsv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/qsv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/qsv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/qsv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/qsv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/qsv' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:wayland.freedesktop.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/qsv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioqsvPackage = typeof cratesioqsvPackage
