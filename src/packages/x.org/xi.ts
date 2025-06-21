/**
 * **xi** - Package from pantry: x.org/xi
 *
 * @domain `x.org/xi`
 *
 * @install `launchpad install x.org/xi`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/xfixes`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxi
 * console.log(pkg.name)        // "xi"
 * console.log(pkg.description) // "Package from pantry: x.org/xi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxiPackage = {
  /**
   * The display name of this package.
   */
  name: 'xi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xi' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xi' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/xfixes',
    'x.org/exts',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxiPackage = typeof xorgxiPackage
