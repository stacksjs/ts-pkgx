/**
 * **silicon** - Package from pantry: crates.io/silicon
 *
 * @domain `crates.io/silicon`
 *
 * @install `launchpad install crates.io/silicon`
 * @dependencies `harfbuzz.org^5`, `linux:freedesktop.org/fontconfig`, `linux:freetype.org`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosilicon
 * console.log(pkg.name)        // "silicon"
 * console.log(pkg.description) // "Package from pantry: crates.io/silicon"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/silicon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosiliconPackage = {
  /**
   * The display name of this package.
   */
  name: 'silicon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/silicon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/silicon' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/silicon' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/silicon -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/silicon' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'harfbuzz.org^5',
    'linux:freedesktop.org/fontconfig',
    'linux:freetype.org',
    'linux:x.org/xcb',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/silicon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiosiliconPackage = typeof cratesiosiliconPackage
