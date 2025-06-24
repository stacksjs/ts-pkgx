/**
 * **craftql** - Package from pantry: crates.io/craftql
 *
 * @domain `crates.io/craftql`
 *
 * @install `launchpad install crates.io/craftql`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiocraftql
 * console.log(pkg.name)        // "craftql"
 * console.log(pkg.description) // "Package from pantry: crates.io/craftql"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/craftql.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocraftqlPackage = {
  /**
   * The display name of this package.
   */
  name: 'craftql' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/craftql' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/craftql' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/craftql' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/craftql -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/craftql' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/craftql/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiocraftqlPackage = typeof cratesiocraftqlPackage
