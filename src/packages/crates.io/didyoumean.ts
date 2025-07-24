/**
 * **didyoumean** - Package from pantry: crates.io/didyoumean
 *
 * @domain `crates.io/didyoumean`
 *
 * @install `launchpad install crates.io/didyoumean`
 * @dependencies `openssl.org^1.1`, `linux:x.org/xcb` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiodidyoumean
 * console.log(pkg.name)        // "didyoumean"
 * console.log(pkg.description) // "Package from pantry: crates.io/didyoumean"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/didyoumean.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiodidyoumeanPackage = {
  /**
   * The display name of this package.
   */
  name: 'didyoumean' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/didyoumean' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/didyoumean' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/didyoumean' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/didyoumean -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/didyoumean' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org^1.1',
    'linux:x.org/xcb',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/didyoumean/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiodidyoumeanPackage = typeof cratesiodidyoumeanPackage
