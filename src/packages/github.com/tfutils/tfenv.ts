/**
 * **tfenv** - Package from pantry: github.com/tfutils/tfenv
 *
 * @domain `github.com/tfutils/tfenv`
 *
 * @install `launchpad install github.com/tfutils/tfenv`
 * @dependencies `gnu.org/grep`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtfutilstfenv
 * console.log(pkg.name)        // "tfenv"
 * console.log(pkg.description) // "Package from pantry: github.com/tfutils/tfenv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tfutils/tfenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtfutilstfenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'tfenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tfutils/tfenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/tfutils/tfenv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/tfutils/tfenv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/tfutils/tfenv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/tfutils/tfenv' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/grep',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tfutils/tfenv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomtfutilstfenvPackage = typeof githubcomtfutilstfenvPackage
