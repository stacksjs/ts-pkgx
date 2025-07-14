/**
 * **skopeo** - Package from pantry: github.com/containers/skopeo
 *
 * @domain `github.com/containers/skopeo`
 *
 * @install `launchpad install github.com/containers/skopeo`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcontainersskopeo
 * console.log(pkg.name)        // "skopeo"
 * console.log(pkg.description) // "Package from pantry: github.com/containers/skopeo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/containers/skopeo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcontainersskopeoPackage = {
  /**
   * The display name of this package.
   */
  name: 'skopeo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/containers/skopeo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/containers/skopeo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/containers/skopeo' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/containers/skopeo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/containers/skopeo' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/containers/skopeo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcontainersskopeoPackage = typeof githubcomcontainersskopeoPackage
