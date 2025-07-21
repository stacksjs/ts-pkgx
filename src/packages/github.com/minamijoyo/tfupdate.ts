/**
 * **tfupdate** - Package from pantry: github.com/minamijoyo/tfupdate
 *
 * @domain `github.com/minamijoyo/tfupdate`
 *
 * @install `launchpad install github.com/minamijoyo/tfupdate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomminamijoyotfupdate
 * console.log(pkg.name)        // "tfupdate"
 * console.log(pkg.description) // "Package from pantry: github.com/minamijoyo/tfup..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/minamijoyo/tfupdate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomminamijoyotfupdatePackage = {
  /**
   * The display name of this package.
   */
  name: 'tfupdate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/minamijoyo/tfupdate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/minamijoyo/tfupdate' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/minamijoyo/tfupdate' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/minamijoyo/tfupdate -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/minamijoyo/tfupdate' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/minamijoyo/tfupdate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomminamijoyotfupdatePackage = typeof githubcomminamijoyotfupdatePackage
