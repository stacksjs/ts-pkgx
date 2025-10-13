/**
 * **tilt.dev** - Package from pantry: tilt.dev
 *
 * @domain `tilt.dev`
 *
 * @install `launchpad install tilt.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tiltdev
 * console.log(pkg.name)        // "tilt.dev"
 * console.log(pkg.description) // "Package from pantry: tilt.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tilt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tiltdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'tilt.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tilt.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tilt.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tilt.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tilt.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tilt.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tilt.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TiltdevPackage = typeof tiltdevPackage
