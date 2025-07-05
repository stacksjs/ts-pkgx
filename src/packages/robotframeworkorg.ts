/**
 * **robotframework.org** - Package from pantry: robotframework.org
 *
 * @domain `robotframework.org`
 *
 * @install `launchpad install robotframework.org`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.robotframeworkorg
 * console.log(pkg.name)        // "robotframework.org"
 * console.log(pkg.description) // "Package from pantry: robotframework.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/robotframework-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const robotframeworkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'robotframework.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'robotframework.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: robotframework.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install robotframework.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +robotframework.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install robotframework.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/robotframework.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RobotframeworkorgPackage = typeof robotframeworkorgPackage
