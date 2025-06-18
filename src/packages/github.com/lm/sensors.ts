/**
 * **github.com/lm-sensors** - pkgx package
 *
 * @domain `github.com/lm/sensors`
 *
 * @install `pkgx github.com/lm-sensors`
 * @name `lm-sensors`
 * @aliases `github.com/lm-sensors`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomlmsensors
 * // Or access via domain
 * const samePkg = pantry.githubcomlmsensors
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lm-sensors"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lm/sensors.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlmsensorsPackage = {
  /**
   * The display name of this package.
   */
  name: 'lm-sensors' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lm/sensors' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/lm-sensors' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/lm-sensors',
  ] as const,
  fullPath: 'github.com/lm-sensors' as const,
}

export type GithubcomlmsensorsPackage = typeof githubcomlmsensorsPackage
