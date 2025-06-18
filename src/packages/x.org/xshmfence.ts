/**
 * **xshmfence** - pkgx package
 *
 * @domain `x.org/xshmfence`
 * @version `1.3.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xshmfence -- $SHELL -i`
 * @aliases `xshmfence`
 * @dependencies `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xshmfence
 * // Or access via domain
 * const samePkg = pantry.xorgxshmfence
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xshmfence"
 * console.log(pkg.versions[0]) // "1.3.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xshmfence.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xshmfencePackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xshmfence' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xshmfence' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xshmfence/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xshmfence -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.3',
    '1.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xshmfence',
  ] as const,
  fullPath: 'x.org/xshmfence' as const,
}

export type XshmfencePackage = typeof xshmfencePackage
