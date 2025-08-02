/**
 * **libdeflate** - Package from pantry: github.com/ebiggers/libdeflate
 *
 * @domain `github.com/ebiggers/libdeflate`
 *
 * @install `launchpad install github.com/ebiggers/libdeflate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomebiggerslibdeflate
 * console.log(pkg.name)        // "libdeflate"
 * console.log(pkg.description) // "Package from pantry: github.com/ebiggers/libdef..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ebiggers/libdeflate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomebiggerslibdeflatePackage = {
  /**
   * The display name of this package.
   */
  name: 'libdeflate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ebiggers/libdeflate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ebiggers/libdeflate' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ebiggers/libdeflate' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ebiggers/libdeflate -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ebiggers/libdeflate' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ebiggers/libdeflate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomebiggerslibdeflatePackage = typeof githubcomebiggerslibdeflatePackage
