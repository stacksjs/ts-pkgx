/**
 * **earthly** - Package from pantry: earthly.dev/earthly
 *
 * @domain `earthly.dev/earthly`
 *
 * @install `launchpad install earthly.dev/earthly`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.earthlydevearthly
 * console.log(pkg.name)        // "earthly"
 * console.log(pkg.description) // "Package from pantry: earthly.dev/earthly"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/earthly-dev/earthly.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const earthlydevearthlyPackage = {
  /**
   * The display name of this package.
   */
  name: 'earthly' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'earthly.dev/earthly' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: earthly.dev/earthly' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install earthly.dev/earthly' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +earthly.dev/earthly -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install earthly.dev/earthly' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/earthly.dev/earthly/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EarthlydevearthlyPackage = typeof earthlydevearthlyPackage
