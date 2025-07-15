/**
 * **github.com/dloebl/cgif** - GIF encoder written in C
 *
 * @domain `github.com/dloebl/cgif`
 * @version `0.5.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/dloebl/cgif`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdloeblcgif
 * console.log(pkg.name)        // "github.com/dloebl/cgif"
 * console.log(pkg.description) // "GIF encoder written in C"
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dloebl/cgif.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdloeblcgifPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/dloebl/cgif' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dloebl/cgif' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GIF encoder written in C' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dloebl/cgif/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/dloebl/cgif' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.0',
    '0.4.1',
    '0.4.0',
    '0.3.2',
    '0.3.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/dloebl/cgif -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/dloebl/cgif' as const,
}

export type GithubcomdloeblcgifPackage = typeof githubcomdloeblcgifPackage
