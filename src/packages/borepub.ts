/**
 * **bore.pub** - pkgx package
 *
 * @domain `bore.pub`
 * @version `0.6.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bore.pub`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.borepub
 * console.log(pkg.name)        // "bore.pub"
 * console.log(pkg.versions[0]) // "0.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bore-pub.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const borepubPackage = {
  /**
   * The display name of this package.
   */
  name: 'bore.pub' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bore.pub' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bore.pub/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bore.pub' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bore.pub -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bore.pub' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  buildDependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.0',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
  ] as const,
  aliases: [] as const,
}

export type BorepubPackage = typeof borepubPackage
