/**
 * **streebog** - Package from pantry: github.com/adegtyarev/streebog
 *
 * @domain `github.com/adegtyarev/streebog`
 *
 * @install `launchpad install github.com/adegtyarev/streebog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomadegtyarevstreebog
 * console.log(pkg.name)        // "streebog"
 * console.log(pkg.description) // "Package from pantry: github.com/adegtyarev/stre..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adegtyarev/streebog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomadegtyarevstreebogPackage = {
  /**
   * The display name of this package.
   */
  name: 'streebog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adegtyarev/streebog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/adegtyarev/streebog' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/adegtyarev/streebog' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/adegtyarev/streebog -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/adegtyarev/streebog' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adegtyarev/streebog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomadegtyarevstreebogPackage = typeof githubcomadegtyarevstreebogPackage
