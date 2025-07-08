/**
 * **libnl** - Package from pantry: github.com/thom311/libnl
 *
 * @domain `github.com/thom311/libnl`
 *
 * @install `launchpad install github.com/thom311/libnl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomthom311libnl
 * console.log(pkg.name)        // "libnl"
 * console.log(pkg.description) // "Package from pantry: github.com/thom311/libnl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thom311/libnl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomthom311libnlPackage = {
  /**
   * The display name of this package.
   */
  name: 'libnl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thom311/libnl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/thom311/libnl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/thom311/libnl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/thom311/libnl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/thom311/libnl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thom311/libnl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomthom311libnlPackage = typeof githubcomthom311libnlPackage
