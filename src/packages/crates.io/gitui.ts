/**
 * **gitui** - Package from pantry: crates.io/gitui
 *
 * @domain `crates.io/gitui`
 *
 * @install `launchpad install crates.io/gitui`
 * @dependencies `perl.org`, `openssl.org^1.1`, `zlib.net^1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitui
 * console.log(pkg.name)        // "gitui"
 * console.log(pkg.description) // "Package from pantry: crates.io/gitui"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/gitui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogituiPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/gitui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/gitui' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/gitui' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/gitui -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/gitui' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
    'openssl.org^1.1',
    'zlib.net^1',
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/gitui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogituiPackage = typeof cratesiogituiPackage
