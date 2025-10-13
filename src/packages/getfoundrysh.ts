/**
 * **getfoundry.sh** - pkgx package
 *
 * @domain `getfoundry.sh`
 *
 * @install `launchpad install getfoundry.sh`
 * @dependencies `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getfoundrysh
 * console.log(pkg.name)        // "getfoundry.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getfoundry-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getfoundryshPackage = {
  /**
   * The display name of this package.
   */
  name: 'getfoundry.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getfoundry.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install getfoundry.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org^2',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +getfoundry.sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install getfoundry.sh' as const,
}

export type GetfoundryshPackage = typeof getfoundryshPackage
