/**
 * **x.org/sm** - pkgx package
 *
 * @domain `x.org/sm`
 * @version `1.2.6` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install x.org/sm`
 * @dependencies `x.org/ice`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgsm
 * console.log(pkg.name)        // "x.org/sm"
 * console.log(pkg.versions[0]) // "1.2.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/sm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgsmPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/sm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/sm' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/sm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/sm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/ice',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.6',
    '1.2.5',
    '1.2.4',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/sm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/sm' as const,
}

export type XorgsmPackage = typeof xorgsmPackage
