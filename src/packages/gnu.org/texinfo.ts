/**
 * **texinfo** - Package from pantry: gnu.org/texinfo
 *
 * @domain `gnu.org/texinfo`
 *
 * @install `launchpad install gnu.org/texinfo`
 * @dependencies `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgtexinfo
 * console.log(pkg.name)        // "texinfo"
 * console.log(pkg.description) // "Package from pantry: gnu.org/texinfo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/texinfo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgtexinfoPackage = {
  /**
   * The display name of this package.
   */
  name: 'texinfo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/texinfo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/texinfo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/texinfo' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/texinfo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/texinfo' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/texinfo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgtexinfoPackage = typeof gnuorgtexinfoPackage
