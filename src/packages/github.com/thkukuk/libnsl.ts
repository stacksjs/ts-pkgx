/**
 * **libnsl** - This library contains the public client interface for NIS(YP) and NIS+ in a IPv6 ready version
 *
 * @domain `github.com/thkukuk/libnsl`
 * @version `2.0.1` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/thkukuk/libnsl -- $SHELL -i`
 * @dependencies `sourceforge.net/libtirpc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomthkukuklibnsl
 * console.log(pkg.name)        // "libnsl"
 * console.log(pkg.description) // "This library contains the public client interfa..."
 * console.log(pkg.versions[0]) // "2.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thkukuk/libnsl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomthkukuklibnslPackage = {
  /**
   * The display name of this package.
   */
  name: 'libnsl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thkukuk/libnsl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'This library contains the public client interface for NIS(YP) and NIS+ in a IPv6 ready version' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thkukuk/libnsl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/thkukuk/libnsl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceforge.net/libtirpc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.1',
    '2.0.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomthkukuklibnslPackage = typeof githubcomthkukuklibnslPackage
