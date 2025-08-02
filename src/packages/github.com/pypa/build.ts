/**
 * **build** - Package from pantry: github.com/pypa/build
 *
 * @domain `github.com/pypa/build`
 *
 * @install `launchpad install github.com/pypa/build`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompypabuild
 * console.log(pkg.name)        // "build"
 * console.log(pkg.description) // "Package from pantry: github.com/pypa/build"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pypa/build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompypabuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'build' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pypa/build' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/pypa/build' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/pypa/build' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/pypa/build -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/pypa/build' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pypa/build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompypabuildPackage = typeof githubcompypabuildPackage
