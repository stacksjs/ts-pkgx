/**
 * **libmaxminddb** - Package from pantry: github.com/maxmind/libmaxminddb
 *
 * @domain `github.com/maxmind/libmaxminddb`
 *
 * @install `launchpad install github.com/maxmind/libmaxminddb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommaxmindlibmaxminddb
 * console.log(pkg.name)        // "libmaxminddb"
 * console.log(pkg.description) // "Package from pantry: github.com/maxmind/libmaxm..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maxmind/libmaxminddb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommaxmindlibmaxminddbPackage = {
  /**
   * The display name of this package.
   */
  name: 'libmaxminddb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/maxmind/libmaxminddb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/maxmind/libmaxminddb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/maxmind/libmaxminddb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/maxmind/libmaxminddb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/maxmind/libmaxminddb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/maxmind/libmaxminddb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommaxmindlibmaxminddbPackage = typeof githubcommaxmindlibmaxminddbPackage
