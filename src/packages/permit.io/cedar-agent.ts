/**
 * **cedar-agent** - Cedar-agent is the easiest way to deploy and run Cedar
 *
 * @domain `permit.io/cedar-agent`
 * @programs `cedar-agent`
 * @version `0.2.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cedar-agent`
 * @name `cedar-agent`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cedaragent
 * // Or access via domain
 * const samePkg = pantry.permitiocedaragent
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cedar-agent"
 * console.log(pkg.description) // "Cedar-agent is the easiest way to deploy and ru..."
 * console.log(pkg.programs)    // ["cedar-agent"]
 * console.log(pkg.versions[0]) // "0.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/permit-io/cedar-agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cedaragentPackage = {
  /**
   * The display name of this package.
   */
  name: 'cedar-agent' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'permit.io/cedar-agent' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cedar-agent is the easiest way to deploy and run Cedar' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/permit.io/cedar-agent/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cedar-agent' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cedar-agent',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.1',
    '0.2.0',
    '0.1.4',
    '0.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cedar-agent -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cedar-agent' as const,
}

export type CedaragentPackage = typeof cedaragentPackage
