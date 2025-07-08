/**
 * **helmfile** - Package from pantry: github.com/helmfile/helmfile
 *
 * @domain `github.com/helmfile/helmfile`
 *
 * @install `launchpad install github.com/helmfile/helmfile`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomhelmfilehelmfile
 * console.log(pkg.name)        // "helmfile"
 * console.log(pkg.description) // "Package from pantry: github.com/helmfile/helmfile"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/helmfile/helmfile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomhelmfilehelmfilePackage = {
  /**
   * The display name of this package.
   */
  name: 'helmfile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/helmfile/helmfile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/helmfile/helmfile' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/helmfile/helmfile' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/helmfile/helmfile -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/helmfile/helmfile' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/helmfile/helmfile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomhelmfilehelmfilePackage = typeof githubcomhelmfilehelmfilePackage
