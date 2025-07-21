/**
 * **opencore-amr** - Package from pantry: sourceforge.net/opencore-amr
 *
 * @domain `sourceforge.net/opencore-amr`
 *
 * @install `launchpad install sourceforge.net/opencore-amr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetopencoreamr
 * console.log(pkg.name)        // "opencore-amr"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/opencore-amr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/opencore-amr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetopencoreamrPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencore-amr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/opencore-amr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/opencore-amr' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/opencore-amr' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/opencore-amr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sourceforge.net/opencore-amr' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/opencore-amr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourceforgenetopencoreamrPackage = typeof sourceforgenetopencoreamrPackage
