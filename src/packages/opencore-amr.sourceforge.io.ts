/**
 * **opencore-amr.sourceforge.io** - pkgx package
 *
 * @domain `opencore-amr.sourceforge.io`
 * @version `0.1.6` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/opencore-amr-sourceforge-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +opencore-amr.sourceforge.io -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opencoreamrsourceforgeio
 * console.log(pkg.name)        // "opencore-amr.sourceforge.io"
 * console.log(pkg.versions[0]) // "0.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opencore-amr-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opencoreamrsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencore-amr.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opencore-amr.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opencore-amr.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +opencore-amr.sourceforge.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.6',
  ] as const,
  aliases: [] as const,
  fullPath: 'opencore-amr.sourceforge.io' as const,
}

export type OpencoreamrsourceforgeioPackage = typeof opencoreamrsourceforgeioPackage
