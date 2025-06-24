/**
 * **librist** - Package from pantry: code.videolan.org/rist/librist
 *
 * @domain `code.videolan.org/rist/librist`
 *
 * @install `launchpad install code.videolan.org/rist/librist`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.codevideolanorgristlibrist
 * console.log(pkg.name)        // "librist"
 * console.log(pkg.description) // "Package from pantry: code.videolan.org/rist/lib..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/rist/librist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codevideolanorgristlibristPackage = {
  /**
   * The display name of this package.
   */
  name: 'librist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org/rist/librist' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: code.videolan.org/rist/librist' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install code.videolan.org/rist/librist' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +code.videolan.org/rist/librist -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install code.videolan.org/rist/librist' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/code.videolan.org/rist/librist/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CodevideolanorgristlibristPackage = typeof codevideolanorgristlibristPackage
