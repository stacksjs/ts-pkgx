/**
 * **libunibreak** - Package from pantry: github.com/adah1972/libunibreak
 *
 * @domain `github.com/adah1972/libunibreak`
 *
 * @install `launchpad install github.com/adah1972/libunibreak`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomadah1972libunibreak
 * console.log(pkg.name)        // "libunibreak"
 * console.log(pkg.description) // "Package from pantry: github.com/adah1972/libuni..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adah1972/libunibreak.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomadah1972libunibreakPackage = {
  /**
   * The display name of this package.
   */
  name: 'libunibreak' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adah1972/libunibreak' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/adah1972/libunibreak' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/adah1972/libunibreak' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/adah1972/libunibreak -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/adah1972/libunibreak' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adah1972/libunibreak/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomadah1972libunibreakPackage = typeof githubcomadah1972libunibreakPackage
