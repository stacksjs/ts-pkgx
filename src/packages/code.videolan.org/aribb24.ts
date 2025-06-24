/**
 * **aribb24** - Package from pantry: code.videolan.org/aribb24
 *
 * @domain `code.videolan.org/aribb24`
 *
 * @install `launchpad install code.videolan.org/aribb24`
 * @dependencies `libpng.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.codevideolanorgaribb24
 * console.log(pkg.name)        // "aribb24"
 * console.log(pkg.description) // "Package from pantry: code.videolan.org/aribb24"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/aribb24.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codevideolanorgaribb24Package = {
  /**
   * The display name of this package.
   */
  name: 'aribb24' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org/aribb24' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: code.videolan.org/aribb24' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install code.videolan.org/aribb24' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +code.videolan.org/aribb24 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install code.videolan.org/aribb24' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/code.videolan.org/aribb24/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Codevideolanorgaribb24Package = typeof codevideolanorgaribb24Package
