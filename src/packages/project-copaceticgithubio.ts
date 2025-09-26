/**
 * **project-copacetic.github.io** - pkgx package
 *
 * @domain `project-copacetic.github.io`
 * @version `0.11.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install project-copacetic.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projectcopaceticgithubio
 * console.log(pkg.name)        // "project-copacetic.github.io"
 * console.log(pkg.versions[0]) // "0.11.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/project-copacetic-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projectcopaceticgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'project-copacetic.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'project-copacetic.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/project-copacetic.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/project-copacetic/copacetic' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install project-copacetic.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.1',
    '0.11.0',
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.0',
    '0.6.2',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +project-copacetic.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install project-copacetic.github.io' as const,
}

export type ProjectcopaceticgithubioPackage = typeof projectcopaceticgithubioPackage
