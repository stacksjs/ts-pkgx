/**
 * **xxHash** - Package from pantry: github.com/Cyan4973/xxHash
 *
 * @domain `github.com/Cyan4973/xxHash`
 *
 * @install `launchpad install github.com/Cyan4973/xxHash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcyan4973xxhash
 * console.log(pkg.name)        // "xxHash"
 * console.log(pkg.description) // "Package from pantry: github.com/Cyan4973/xxHash"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Cyan4973/xxHash.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcyan4973xxhashPackage = {
  /**
   * The display name of this package.
   */
  name: 'xxHash' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Cyan4973/xxHash' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Cyan4973/xxHash' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Cyan4973/xxHash' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Cyan4973/xxHash -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Cyan4973/xxHash' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Cyan4973/xxHash/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomcyan4973xxhashPackage = typeof githubcomcyan4973xxhashPackage
