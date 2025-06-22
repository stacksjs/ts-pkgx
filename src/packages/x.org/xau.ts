/**
 * **xau** - Package from pantry: x.org/xau
 *
 * @domain `x.org/xau`
 *
 * @install `launchpad install x.org/xau`
 * @dependencies `x.org/util-macros`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxau
 * console.log(pkg.name)        // "xau"
 * console.log(pkg.description) // "Package from pantry: x.org/xau"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xau.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxauPackage = {
  /**
   * The display name of this package.
   */
  name: 'xau' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xau' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xau' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xau' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xau -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xau' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/util-macros',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xau/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxauPackage = typeof xorgxauPackage
