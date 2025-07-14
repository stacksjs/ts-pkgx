/**
 * **libde265** - Package from pantry: github.com/strukturag/libde265
 *
 * @domain `github.com/strukturag/libde265`
 *
 * @install `launchpad install github.com/strukturag/libde265`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomstrukturaglibde265
 * console.log(pkg.name)        // "libde265"
 * console.log(pkg.description) // "Package from pantry: github.com/strukturag/libd..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/strukturag/libde265.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomstrukturaglibde265Package = {
  /**
   * The display name of this package.
   */
  name: 'libde265' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/strukturag/libde265' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/strukturag/libde265' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/strukturag/libde265' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/strukturag/libde265 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/strukturag/libde265' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/strukturag/libde265/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomstrukturaglibde265Package = typeof githubcomstrukturaglibde265Package
