/**
 * **cnquery.io** - Package from pantry: cnquery.io
 *
 * @domain `cnquery.io`
 *
 * @install `launchpad install cnquery.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cnqueryio
 * console.log(pkg.name)        // "cnquery.io"
 * console.log(pkg.description) // "Package from pantry: cnquery.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cnquery-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cnqueryioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cnquery.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cnquery.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cnquery.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cnquery.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cnquery.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cnquery.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cnquery.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CnqueryioPackage = typeof cnqueryioPackage
