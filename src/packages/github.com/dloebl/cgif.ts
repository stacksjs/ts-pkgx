/**
 * **cgif** - Package from pantry: github.com/dloebl/cgif
 *
 * @domain `github.com/dloebl/cgif`
 *
 * @install `launchpad install github.com/dloebl/cgif`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdloeblcgif
 * console.log(pkg.name)        // "cgif"
 * console.log(pkg.description) // "Package from pantry: github.com/dloebl/cgif"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dloebl/cgif.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdloeblcgifPackage = {
  /**
   * The display name of this package.
   */
  name: 'cgif' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dloebl/cgif' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/dloebl/cgif' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/dloebl/cgif' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/dloebl/cgif -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/dloebl/cgif' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dloebl/cgif/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdloeblcgifPackage = typeof githubcomdloeblcgifPackage
