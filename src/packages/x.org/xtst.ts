/**
 * **xtst** - pkgx package
 *
 * @domain `x.org/xtst`
 * @version `1.2.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/xtst -- $SHELL -i`
 * @dependencies `x.org/xi`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxtst
 * console.log(pkg.name)        // "xtst"
 * console.log(pkg.versions[0]) // "1.2.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xtst.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxtstPackage = {
  /**
   * The display name of this package.
   */
  name: 'xtst' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xtst' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xtst/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/xtst -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xi',
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.5',
    '1.2.4',
  ] as const,
  aliases: [] as const,
}

export type XorgxtstPackage = typeof xorgxtstPackage
