/**
 * **libaio** - pkgx package
 *
 * @domain `pagure.io/libaio`
 * @version `0.3.113` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +pagure.io/libaio -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pagureiolibaio
 * console.log(pkg.name)        // "libaio"
 * console.log(pkg.versions[0]) // "0.3.113" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pagure-io/libaio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pagureiolibaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libaio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pagure.io/libaio' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pagure.io/libaio/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +pagure.io/libaio -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.113',
  ] as const,
  aliases: [] as const,
}

export type PagureiolibaioPackage = typeof pagureiolibaioPackage
