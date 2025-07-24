/**
 * **imath** - Package from pantry: openexr.com/imath
 *
 * @domain `openexr.com/imath`
 *
 * @install `launchpad install openexr.com/imath`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openexrcomimath
 * console.log(pkg.name)        // "imath"
 * console.log(pkg.description) // "Package from pantry: openexr.com/imath"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openexr-com/imath.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openexrcomimathPackage = {
  /**
   * The display name of this package.
   */
  name: 'imath' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openexr.com/imath' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openexr.com/imath' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openexr.com/imath' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openexr.com/imath -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openexr.com/imath' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openexr.com/imath/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenexrcomimathPackage = typeof openexrcomimathPackage
