/**
 * **xpm** - Package from pantry: x.org/xpm
 *
 * @domain `x.org/xpm`
 *
 * @install `launchpad install x.org/xpm`
 * @dependencies `x.org/x11`, `zlib.net^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxpm
 * console.log(pkg.name)        // "xpm"
 * console.log(pkg.description) // "Package from pantry: x.org/xpm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xpm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxpmPackage = {
  /**
   * The display name of this package.
   */
  name: 'xpm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xpm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xpm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xpm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xpm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xpm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'zlib.net^1.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xpm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxpmPackage = typeof xorgxpmPackage
