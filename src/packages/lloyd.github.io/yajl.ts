/**
 * **yajl** - Package from pantry: lloyd.github.io/yajl
 *
 * @domain `lloyd.github.io/yajl`
 *
 * @install `launchpad install lloyd.github.io/yajl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lloydgithubioyajl
 * console.log(pkg.name)        // "yajl"
 * console.log(pkg.description) // "Package from pantry: lloyd.github.io/yajl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lloyd-github-io/yajl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lloydgithubioyajlPackage = {
  /**
   * The display name of this package.
   */
  name: 'yajl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lloyd.github.io/yajl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lloyd.github.io/yajl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lloyd.github.io/yajl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lloyd.github.io/yajl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lloyd.github.io/yajl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lloyd.github.io/yajl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LloydgithubioyajlPackage = typeof lloydgithubioyajlPackage
