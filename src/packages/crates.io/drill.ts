/**
 * **drill** - Package from pantry: crates.io/drill
 *
 * @domain `crates.io/drill`
 *
 * @install `launchpad install crates.io/drill`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiodrill
 * console.log(pkg.name)        // "drill"
 * console.log(pkg.description) // "Package from pantry: crates.io/drill"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/drill.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiodrillPackage = {
  /**
   * The display name of this package.
   */
  name: 'drill' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/drill' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/drill' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/drill' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/drill -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/drill' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/drill/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiodrillPackage = typeof cratesiodrillPackage
