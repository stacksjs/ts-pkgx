/**
 * **ifacemaker** - Package from pantry: github.com/vburenin/ifacemaker
 *
 * @domain `github.com/vburenin/ifacemaker`
 *
 * @install `launchpad install github.com/vburenin/ifacemaker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomvbureninifacemaker
 * console.log(pkg.name)        // "ifacemaker"
 * console.log(pkg.description) // "Package from pantry: github.com/vburenin/ifacem..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/vburenin/ifacemaker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomvbureninifacemakerPackage = {
  /**
   * The display name of this package.
   */
  name: 'ifacemaker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/vburenin/ifacemaker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/vburenin/ifacemaker' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/vburenin/ifacemaker' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/vburenin/ifacemaker -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/vburenin/ifacemaker' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/vburenin/ifacemaker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomvbureninifacemakerPackage = typeof githubcomvbureninifacemakerPackage
