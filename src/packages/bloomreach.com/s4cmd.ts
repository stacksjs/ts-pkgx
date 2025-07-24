/**
 * **s4cmd** - Package from pantry: bloomreach.com/s4cmd
 *
 * @domain `bloomreach.com/s4cmd`
 *
 * @install `launchpad install bloomreach.com/s4cmd`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bloomreachcoms4cmd
 * console.log(pkg.name)        // "s4cmd"
 * console.log(pkg.description) // "Package from pantry: bloomreach.com/s4cmd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bloomreach-com/s4cmd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bloomreachcoms4cmdPackage = {
  /**
   * The display name of this package.
   */
  name: 's4cmd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bloomreach.com/s4cmd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bloomreach.com/s4cmd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bloomreach.com/s4cmd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bloomreach.com/s4cmd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bloomreach.com/s4cmd' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bloomreach.com/s4cmd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Bloomreachcoms4cmdPackage = typeof bloomreachcoms4cmdPackage
