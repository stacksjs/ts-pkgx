/**
 * **buildtools** - Package from pantry: github.com/bazelbuild/buildtools
 *
 * @domain `github.com/bazelbuild/buildtools`
 *
 * @install `launchpad install github.com/bazelbuild/buildtools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombazelbuildbuildtools
 * console.log(pkg.name)        // "buildtools"
 * console.log(pkg.description) // "Package from pantry: github.com/bazelbuild/buil..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/bazelbuild/buildtools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombazelbuildbuildtoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'buildtools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/bazelbuild/buildtools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/bazelbuild/buildtools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/bazelbuild/buildtools' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/bazelbuild/buildtools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/bazelbuild/buildtools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/bazelbuild/buildtools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcombazelbuildbuildtoolsPackage = typeof githubcombazelbuildbuildtoolsPackage
