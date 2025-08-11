/**
 * **xtls.github.io** - Package from pantry: xtls.github.io
 *
 * @domain `xtls.github.io`
 *
 * @install `launchpad install xtls.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xtlsgithubio
 * console.log(pkg.name)        // "xtls.github.io"
 * console.log(pkg.description) // "Package from pantry: xtls.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xtls-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xtlsgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'xtls.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xtls.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xtls.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xtls.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +xtls.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install xtls.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xtls.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XtlsgithubioPackage = typeof xtlsgithubioPackage
