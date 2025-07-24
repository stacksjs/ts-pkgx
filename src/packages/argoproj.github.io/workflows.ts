/**
 * **workflows** - Package from pantry: argoproj.github.io/workflows
 *
 * @domain `argoproj.github.io/workflows`
 *
 * @install `launchpad install argoproj.github.io/workflows`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.argoprojgithubioworkflows
 * console.log(pkg.name)        // "workflows"
 * console.log(pkg.description) // "Package from pantry: argoproj.github.io/workflows"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/argoproj-github-io/workflows.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argoprojgithubioworkflowsPackage = {
  /**
   * The display name of this package.
   */
  name: 'workflows' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'argoproj.github.io/workflows' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: argoproj.github.io/workflows' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install argoproj.github.io/workflows' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +argoproj.github.io/workflows -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install argoproj.github.io/workflows' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/argoproj.github.io/workflows/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ArgoprojgithubioworkflowsPackage = typeof argoprojgithubioworkflowsPackage
