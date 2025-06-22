/**
 * **dos2unix** - Package from pantry: waterlan.home.xs4all.nl/dos2unix
 *
 * @domain `waterlan.home.xs4all.nl/dos2unix`
 *
 * @install `launchpad install waterlan.home.xs4all.nl/dos2unix`
 * @dependencies `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.waterlanhomexs4allnldos2unix
 * console.log(pkg.name)        // "dos2unix"
 * console.log(pkg.description) // "Package from pantry: waterlan.home.xs4all.nl/do..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/waterlan-home-xs4all-nl/dos2unix.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const waterlanhomexs4allnldos2unixPackage = {
  /**
   * The display name of this package.
   */
  name: 'dos2unix' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'waterlan.home.xs4all.nl/dos2unix' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: waterlan.home.xs4all.nl/dos2unix' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install waterlan.home.xs4all.nl/dos2unix' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +waterlan.home.xs4all.nl/dos2unix -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install waterlan.home.xs4all.nl/dos2unix' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/waterlan.home.xs4all.nl/dos2unix/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Waterlanhomexs4allnldos2unixPackage = typeof waterlanhomexs4allnldos2unixPackage
