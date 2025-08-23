/**
 * **genact** - pkgx package
 *
 * @domain `svenstaro.github.io/genact`
 *
 * @install `launchpad install svenstaro.github.io/genact`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.svenstarogithubiogenact
 * console.log(pkg.name)        // "genact"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/svenstaro-github-io/genact.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const svenstarogithubiogenactPackage = {
  /**
   * The display name of this package.
   */
  name: 'genact' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'svenstaro.github.io/genact' as const,
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
  installCommand: 'launchpad install svenstaro.github.io/genact' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +svenstaro.github.io/genact -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install svenstaro.github.io/genact' as const,
}

export type SvenstarogithubiogenactPackage = typeof svenstarogithubiogenactPackage
