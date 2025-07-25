/**
 * **x.org/xrandr** - pkgx package
 *
 * @domain `x.org/xrandr`
 * @version `1.5.4` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install x.org/xrandr`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxrandr
 * console.log(pkg.name)        // "x.org/xrandr"
 * console.log(pkg.versions[0]) // "1.5.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xrandr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxrandrPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xrandr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xrandr' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xrandr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xrandr' as const,
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
    'x.org/xrender',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.4',
    '1.5.3',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xrandr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xrandr' as const,
}

export type XorgxrandrPackage = typeof xorgxrandrPackage
