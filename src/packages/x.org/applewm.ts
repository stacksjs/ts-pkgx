/**
 * **applewm** - pkgx package
 *
 * @domain `x.org/applewm`
 * @version `1.4.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/applewm -- $SHELL -i`
 * @dependencies `x.org/x11`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgapplewm
 * console.log(pkg.name)        // "applewm"
 * console.log(pkg.versions[0]) // "1.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/applewm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgapplewmPackage = {
  /**
   * The display name of this package.
   */
  name: 'applewm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/applewm' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/applewm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +x.org/applewm -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.1',
  ] as const,
  aliases: [] as const,
}

export type XorgapplewmPackage = typeof xorgapplewmPackage
