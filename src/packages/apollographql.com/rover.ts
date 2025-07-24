/**
 * **rover** - Package from pantry: apollographql.com/rover
 *
 * @domain `apollographql.com/rover`
 *
 * @install `launchpad install apollographql.com/rover`
 * @dependencies `openssl.org^1.1`, `zlib.net^1`, `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apollographqlcomrover
 * console.log(pkg.name)        // "rover"
 * console.log(pkg.description) // "Package from pantry: apollographql.com/rover"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apollographql-com/rover.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apollographqlcomroverPackage = {
  /**
   * The display name of this package.
   */
  name: 'rover' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apollographql.com/rover' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apollographql.com/rover' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apollographql.com/rover' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apollographql.com/rover -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apollographql.com/rover' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1',
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apollographql.com/rover/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApollographqlcomroverPackage = typeof apollographqlcomroverPackage
