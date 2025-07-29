/**
 * **wthrr** - Package from pantry: crates.io/wthrr
 *
 * @domain `crates.io/wthrr`
 *
 * @install `launchpad install crates.io/wthrr`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiowthrr
 * console.log(pkg.name)        // "wthrr"
 * console.log(pkg.description) // "Package from pantry: crates.io/wthrr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/wthrr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiowthrrPackage = {
  /**
   * The display name of this package.
   */
  name: 'wthrr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/wthrr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/wthrr' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/wthrr' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/wthrr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/wthrr' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/wthrr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiowthrrPackage = typeof cratesiowthrrPackage
