/**
 * **diffoci** - Package from pantry: github.com/reproducible-containers/diffoci
 *
 * @domain `github.com/reproducible-containers/diffoci`
 *
 * @install `launchpad install github.com/reproducible-containers/diffoci`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomreproduciblecontainersdiffoci
 * console.log(pkg.name)        // "diffoci"
 * console.log(pkg.description) // "Package from pantry: github.com/reproducible-co..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/reproducible-containers/diffoci.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomreproduciblecontainersdiffociPackage = {
  /**
   * The display name of this package.
   */
  name: 'diffoci' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/reproducible-containers/diffoci' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/reproducible-containers/diffoci' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/reproducible-containers/diffoci' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/reproducible-containers/diffoci -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/reproducible-containers/diffoci' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/reproducible-containers/diffoci/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomreproduciblecontainersdiffociPackage = typeof githubcomreproduciblecontainersdiffociPackage
