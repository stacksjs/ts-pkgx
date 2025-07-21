/**
 * **chatblade** - Package from pantry: github.com/npiv/chatblade
 *
 * @domain `github.com/npiv/chatblade`
 *
 * @install `launchpad install github.com/npiv/chatblade`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnpivchatblade
 * console.log(pkg.name)        // "chatblade"
 * console.log(pkg.description) // "Package from pantry: github.com/npiv/chatblade"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/npiv/chatblade.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnpivchatbladePackage = {
  /**
   * The display name of this package.
   */
  name: 'chatblade' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/npiv/chatblade' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/npiv/chatblade' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/npiv/chatblade' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/npiv/chatblade -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/npiv/chatblade' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/npiv/chatblade/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnpivchatbladePackage = typeof githubcomnpivchatbladePackage
