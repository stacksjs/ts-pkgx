/**
 * **cloudfoundry.org/cf-cli** - pkgx package
 *
 * @domain `cloudfoundry.org/cf/cli`
 *
 * @install `pkgx cloudfoundry.org/cf-cli`
 * @name `cf-cli`
 * @aliases `cloudfoundry.org/cf-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cloudfoundryorgcfcli
 * // Or access via domain
 * const samePkg = pantry.cloudfoundryorgcfcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cf-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudfoundry-org/cf/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudfoundryorgcfcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cf-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudfoundry.org/cf/cli' as const,
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
  installCommand: 'pkgx cloudfoundry.org/cf-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cloudfoundry.org/cf-cli',
  ] as const,
  fullPath: 'cloudfoundry.org/cf-cli' as const,
}

export type CloudfoundryorgcfcliPackage = typeof cloudfoundryorgcfcliPackage
