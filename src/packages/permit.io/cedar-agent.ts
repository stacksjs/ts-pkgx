/**
 * **cedar-agent** - Cedar-agent is the easiest way to deploy and run Cedar
 *
 * @domain `permit.io/cedar-agent`
 * @programs `cedar-agent`
 * @version `0.2.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cedar-agent`
 * @name `cedar-agent`
 * @dependencies `rust-lang.org>=1.65`, `rust-lang.org/cargo`
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
 * console.log(pkg.versions[0]) // "0.2.0" (latest)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
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
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.0',
    '0.1.4',
    '0.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CedaragentPackage = typeof cedaragentPackage
