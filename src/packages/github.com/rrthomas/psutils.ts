/**
 * **psutils** - Package from pantry: github.com/rrthomas/psutils
 *
 * @domain `github.com/rrthomas/psutils`
 *
 * @install `launchpad install github.com/rrthomas/psutils`
 * @dependencies `pkgx.sh^1`, `github.com/rrthomas/libpaper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomrrthomaspsutils
 * console.log(pkg.name)        // "psutils"
 * console.log(pkg.description) // "Package from pantry: github.com/rrthomas/psutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rrthomas/psutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomrrthomaspsutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'psutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rrthomas/psutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/rrthomas/psutils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/rrthomas/psutils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/rrthomas/psutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/rrthomas/psutils' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'github.com/rrthomas/libpaper',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rrthomas/psutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomrrthomaspsutilsPackage = typeof githubcomrrthomaspsutilsPackage
