/**
 * **libnsl** - Package from pantry: github.com/thkukuk/libnsl
 *
 * @domain `github.com/thkukuk/libnsl`
 *
 * @install `launchpad install github.com/thkukuk/libnsl`
 * @dependencies `sourceforge.net/libtirpc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomthkukuklibnsl
 * console.log(pkg.name)        // "libnsl"
 * console.log(pkg.description) // "Package from pantry: github.com/thkukuk/libnsl"
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
  description: 'Package from pantry: github.com/thkukuk/libnsl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/thkukuk/libnsl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/thkukuk/libnsl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/thkukuk/libnsl' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceforge.net/libtirpc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thkukuk/libnsl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomthkukuklibnslPackage = typeof githubcomthkukuklibnslPackage
