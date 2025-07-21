/**
 * **lm-sensors** - Package from pantry: github.com/lm-sensors/lm-sensors
 *
 * @domain `github.com/lm-sensors/lm-sensors`
 *
 * @install `launchpad install github.com/lm-sensors/lm-sensors`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlmsensorslmsensors
 * console.log(pkg.name)        // "lm-sensors"
 * console.log(pkg.description) // "Package from pantry: github.com/lm-sensors/lm-s..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lm-sensors/lm-sensors.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlmsensorslmsensorsPackage = {
  /**
   * The display name of this package.
   */
  name: 'lm-sensors' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lm-sensors/lm-sensors' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/lm-sensors/lm-sensors' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/lm-sensors/lm-sensors' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/lm-sensors/lm-sensors -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/lm-sensors/lm-sensors' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lm-sensors/lm-sensors/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlmsensorslmsensorsPackage = typeof githubcomlmsensorslmsensorsPackage
