/**
 * **click** - Package from pantry: crates.io/click
 *
 * @domain `crates.io/click`
 *
 * @install `launchpad install crates.io/click`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioclick
 * console.log(pkg.name)        // "click"
 * console.log(pkg.description) // "Package from pantry: crates.io/click"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/click.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioclickPackage = {
  /**
   * The display name of this package.
   */
  name: 'click' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/click' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/click' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/click' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/click -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/click' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/click/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioclickPackage = typeof cratesioclickPackage
