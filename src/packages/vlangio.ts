/**
 * **vlang.io** - Package from pantry: vlang.io
 *
 * @domain `vlang.io`
 *
 * @install `launchpad install vlang.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vlangio
 * console.log(pkg.name)        // "vlang.io"
 * console.log(pkg.description) // "Package from pantry: vlang.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vlang-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vlangioPackage = {
  /**
   * The display name of this package.
   */
  name: 'vlang.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vlang.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vlang.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vlang.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +vlang.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install vlang.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vlang.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VlangioPackage = typeof vlangioPackage
