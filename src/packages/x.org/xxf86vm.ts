/**
 * **xxf86vm** - Package from pantry: x.org/xxf86vm
 *
 * @domain `x.org/xxf86vm`
 *
 * @install `launchpad install x.org/xxf86vm`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxxf86vm
 * console.log(pkg.name)        // "xxf86vm"
 * console.log(pkg.description) // "Package from pantry: x.org/xxf86vm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xxf86vm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxxf86vmPackage = {
  /**
   * The display name of this package.
   */
  name: 'xxf86vm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xxf86vm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xxf86vm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xxf86vm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xxf86vm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xxf86vm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/exts',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xxf86vm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Xorgxxf86vmPackage = typeof xorgxxf86vmPackage
