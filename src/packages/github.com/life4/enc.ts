/**
 * **enc** - Package from pantry: github.com/life4/enc
 *
 * @domain `github.com/life4/enc`
 *
 * @install `launchpad install github.com/life4/enc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlife4enc
 * console.log(pkg.name)        // "enc"
 * console.log(pkg.description) // "Package from pantry: github.com/life4/enc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/life4/enc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlife4encPackage = {
  /**
   * The display name of this package.
   */
  name: 'enc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/life4/enc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/life4/enc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/life4/enc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/life4/enc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/life4/enc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/life4/enc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomlife4encPackage = typeof githubcomlife4encPackage
