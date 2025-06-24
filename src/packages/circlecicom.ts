/**
 * **circleci.com** - Package from pantry: circleci.com
 *
 * @domain `circleci.com`
 *
 * @install `launchpad install circleci.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.circlecicom
 * console.log(pkg.name)        // "circleci.com"
 * console.log(pkg.description) // "Package from pantry: circleci.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/circleci-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const circlecicomPackage = {
  /**
   * The display name of this package.
   */
  name: 'circleci.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'circleci.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: circleci.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install circleci.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +circleci.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install circleci.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/circleci.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CirclecicomPackage = typeof circlecicomPackage
