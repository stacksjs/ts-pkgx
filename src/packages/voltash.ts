/**
 * **volta.sh** - Package from pantry: volta.sh
 *
 * @domain `volta.sh`
 *
 * @install `launchpad install volta.sh`
 * @dependencies `curl.se/ca-certs`, `rust-lang.org^1.75`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.voltash
 * console.log(pkg.name)        // "volta.sh"
 * console.log(pkg.description) // "Package from pantry: volta.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/volta-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const voltashPackage = {
  /**
   * The display name of this package.
   */
  name: 'volta.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'volta.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: volta.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install volta.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
    'rust-lang.org^1.75',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/volta.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VoltashPackage = typeof voltashPackage
