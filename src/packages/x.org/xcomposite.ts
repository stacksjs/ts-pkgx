/**
 * **xcomposite** - Package from pantry: x.org/xcomposite
 *
 * @domain `x.org/xcomposite`
 *
 * @install `launchpad install x.org/xcomposite`
 * @dependencies `x.org/x11`, `x.org/xfixes`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxcomposite
 * console.log(pkg.name)        // "xcomposite"
 * console.log(pkg.description) // "Package from pantry: x.org/xcomposite"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xcomposite.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxcompositePackage = {
  /**
   * The display name of this package.
   */
  name: 'xcomposite' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xcomposite' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xcomposite' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xcomposite' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/xfixes',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcomposite/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxcompositePackage = typeof xorgxcompositePackage
