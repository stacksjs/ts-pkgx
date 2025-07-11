/**
 * **x.org/xxf86vm** - pkgx package
 *
 * @domain `x.org/xxf86vm`
 * @version `1.1.6` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install x.org/xxf86vm`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxxf86vm
 * console.log(pkg.name)        // "x.org/xxf86vm"
 * console.log(pkg.versions[0]) // "1.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xxf86vm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxxf86vmPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xxf86vm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xxf86vm' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xxf86vm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xxf86vm' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.6',
    '1.1.5',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xxf86vm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xxf86vm' as const,
}

export type Xorgxxf86vmPackage = typeof xorgxxf86vmPackage
