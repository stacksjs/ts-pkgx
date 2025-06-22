/**
 * **pakku** - Package from pantry: github.com/mycreepy/pakku
 *
 * @domain `github.com/mycreepy/pakku`
 *
 * @install `launchpad install github.com/mycreepy/pakku`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommycreepypakku
 * console.log(pkg.name)        // "pakku"
 * console.log(pkg.description) // "Package from pantry: github.com/mycreepy/pakku"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mycreepy/pakku.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommycreepypakkuPackage = {
  /**
   * The display name of this package.
   */
  name: 'pakku' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mycreepy/pakku' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mycreepy/pakku' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mycreepy/pakku' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mycreepy/pakku -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mycreepy/pakku' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mycreepy/pakku/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommycreepypakkuPackage = typeof githubcommycreepypakkuPackage
