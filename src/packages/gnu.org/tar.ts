/**
 * **tar** - Package from pantry: gnu.org/tar
 *
 * @domain `gnu.org/tar`
 *
 * @install `launchpad install gnu.org/tar`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgtar
 * console.log(pkg.name)        // "tar"
 * console.log(pkg.description) // "Package from pantry: gnu.org/tar"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/tar.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgtarPackage = {
  /**
   * The display name of this package.
   */
  name: 'tar' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/tar' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/tar' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/tar' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/tar -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/tar' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/tar/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgtarPackage = typeof gnuorgtarPackage
