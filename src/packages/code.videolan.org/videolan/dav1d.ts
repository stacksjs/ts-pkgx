/**
 * **dav1d** - Package from pantry: code.videolan.org/videolan/dav1d
 *
 * @domain `code.videolan.org/videolan/dav1d`
 *
 * @install `launchpad install code.videolan.org/videolan/dav1d`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.codevideolanorgvideolandav1d
 * console.log(pkg.name)        // "dav1d"
 * console.log(pkg.description) // "Package from pantry: code.videolan.org/videolan..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/videolan/dav1d.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codevideolanorgvideolandav1dPackage = {
  /**
   * The display name of this package.
   */
  name: 'dav1d' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org/videolan/dav1d' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: code.videolan.org/videolan/dav1d' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install code.videolan.org/videolan/dav1d' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +code.videolan.org/videolan/dav1d -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install code.videolan.org/videolan/dav1d' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/code.videolan.org/videolan/dav1d/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Codevideolanorgvideolandav1dPackage = typeof codevideolanorgvideolandav1dPackage
