/**
 * **epstool** - Package from pantry: ghostgum.com.au/epstool
 *
 * @domain `ghostgum.com.au/epstool`
 *
 * @install `launchpad install ghostgum.com.au/epstool`
 * @dependencies `ghostscript.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ghostgumcomauepstool
 * console.log(pkg.name)        // "epstool"
 * console.log(pkg.description) // "Package from pantry: ghostgum.com.au/epstool"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ghostgum-com-au/epstool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ghostgumcomauepstoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'epstool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ghostgum.com.au/epstool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ghostgum.com.au/epstool' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ghostgum.com.au/epstool' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ghostgum.com.au/epstool -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ghostgum.com.au/epstool' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ghostscript.com',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ghostgum.com.au/epstool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GhostgumcomauepstoolPackage = typeof ghostgumcomauepstoolPackage
