/**
 * **upx.github.io** - Package from pantry: upx.github.io
 *
 * @domain `upx.github.io`
 *
 * @install `launchpad install upx.github.io`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.upxgithubio
 * console.log(pkg.name)        // "upx.github.io"
 * console.log(pkg.description) // "Package from pantry: upx.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/upx-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const upxgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'upx.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'upx.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: upx.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install upx.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +upx.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install upx.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/upx.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type UpxgithubioPackage = typeof upxgithubioPackage
