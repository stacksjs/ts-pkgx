/**
 * **cmocka.org** - pkgx package
 *
 * @domain `cmocka.org`
 * @version `1.1.7` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/cmocka-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +cmocka.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cmockaorg
 * console.log(pkg.name)        // "cmocka.org"
 * console.log(pkg.versions[0]) // "1.1.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cmocka-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cmockaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cmocka.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cmocka.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from cmocka.org' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cmocka.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +cmocka.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.7',
  ] as const,
  aliases: [] as const,
  fullPath: 'cmocka.org' as const,
}

export type CmockaorgPackage = typeof cmockaorgPackage
