/**
 * **xaw** - Package from pantry: x.org/xaw
 *
 * @domain `x.org/xaw`
 *
 * @install `launchpad install x.org/xaw`
 * @dependencies `x.org/x11`, `x.org/exts`, `x.org/xmu`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxaw
 * console.log(pkg.name)        // "xaw"
 * console.log(pkg.description) // "Package from pantry: x.org/xaw"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xaw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxawPackage = {
  /**
   * The display name of this package.
   */
  name: 'xaw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xaw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xaw' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xaw' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xaw -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xaw' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
    'x.org/xmu',
    'x.org/xt',
    'x.org/xpm',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xaw/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxawPackage = typeof xorgxawPackage
