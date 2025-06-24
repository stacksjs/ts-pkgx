/**
 * **fselect** - Package from pantry: crates.io/fselect
 *
 * @domain `crates.io/fselect`
 *
 * @install `launchpad install crates.io/fselect`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiofselect
 * console.log(pkg.name)        // "fselect"
 * console.log(pkg.description) // "Package from pantry: crates.io/fselect"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fselect.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiofselectPackage = {
  /**
   * The display name of this package.
   */
  name: 'fselect' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fselect' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/fselect' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/fselect' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/fselect -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/fselect' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fselect/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiofselectPackage = typeof cratesiofselectPackage
