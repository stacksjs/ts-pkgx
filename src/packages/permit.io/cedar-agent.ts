/**
 * **cedar-agent** - Package from pantry: permit.io/cedar-agent
 *
 * @domain `permit.io/cedar-agent`
 *
 * @install `launchpad install permit.io/cedar-agent`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.permitiocedaragent
 * console.log(pkg.name)        // "cedar-agent"
 * console.log(pkg.description) // "Package from pantry: permit.io/cedar-agent"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/permit-io/cedar-agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const permitiocedaragentPackage = {
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
  description: 'Package from pantry: permit.io/cedar-agent' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install permit.io/cedar-agent' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +permit.io/cedar-agent -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install permit.io/cedar-agent' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/permit.io/cedar-agent/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PermitiocedaragentPackage = typeof permitiocedaragentPackage
