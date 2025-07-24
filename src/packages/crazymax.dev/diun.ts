/**
 * **diun** - pkgx package
 *
 * @domain `crazymax.dev/diun`
 *
 * @install `launchpad install crazymax.dev/diun`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.crazymaxdevdiun
 * console.log(pkg.name)        // "diun"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crazymax-dev/diun.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const crazymaxdevdiunPackage = {
  /**
   * The display name of this package.
   */
  name: 'diun' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crazymax.dev/diun' as const,
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
  installCommand: 'launchpad install crazymax.dev/diun' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crazymax.dev/diun -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crazymax.dev/diun' as const,
}

export type CrazymaxdevdiunPackage = typeof crazymaxdevdiunPackage
