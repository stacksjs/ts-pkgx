/**
 * **agpt.co** - pkgx package
 *
 * @domain `agpt.co`
 *
 * @install `launchpad install agpt.co`
 * @dependencies `python.org>=3.10<3.12`, `redis.io^7`, `tea.xyz^0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.agptco
 * console.log(pkg.name)        // "agpt.co"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/agpt-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agptcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'agpt.co' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'agpt.co' as const,
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
  installCommand: 'launchpad install agpt.co' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.10<3.12',
    'redis.io^7',
    'tea.xyz^0',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +agpt.co -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install agpt.co' as const,
}

export type AgptcoPackage = typeof agptcoPackage
