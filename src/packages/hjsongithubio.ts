/**
 * **hjson.github.io** - Package from pantry: hjson.github.io
 *
 * @domain `hjson.github.io`
 *
 * @install `launchpad install hjson.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hjsongithubio
 * console.log(pkg.name)        // "hjson.github.io"
 * console.log(pkg.description) // "Package from pantry: hjson.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hjson-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hjsongithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hjson.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hjson.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hjson.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hjson.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hjson.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hjson.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hjson.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HjsongithubioPackage = typeof hjsongithubioPackage
