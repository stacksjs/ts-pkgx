/**
 * **minisign** - Package from pantry: jedisct1.github.io/minisign
 *
 * @domain `jedisct1.github.io/minisign`
 *
 * @install `launchpad install jedisct1.github.io/minisign`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jedisct1githubiominisign
 * console.log(pkg.name)        // "minisign"
 * console.log(pkg.description) // "Package from pantry: jedisct1.github.io/minisign"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jedisct1-github-io/minisign.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jedisct1githubiominisignPackage = {
  /**
   * The display name of this package.
   */
  name: 'minisign' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jedisct1.github.io/minisign' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jedisct1.github.io/minisign' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jedisct1.github.io/minisign' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jedisct1.github.io/minisign -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jedisct1.github.io/minisign' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jedisct1.github.io/minisign/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Jedisct1githubiominisignPackage = typeof jedisct1githubiominisignPackage
