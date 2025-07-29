/**
 * **overmind** - Package from pantry: github.com/darthsim/overmind
 *
 * @domain `github.com/darthsim/overmind`
 *
 * @install `launchpad install github.com/darthsim/overmind`
 * @dependencies `github.com/tmux/tmux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdarthsimovermind
 * console.log(pkg.name)        // "overmind"
 * console.log(pkg.description) // "Package from pantry: github.com/darthsim/overmind"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/darthsim/overmind.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdarthsimovermindPackage = {
  /**
   * The display name of this package.
   */
  name: 'overmind' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/darthsim/overmind' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/darthsim/overmind' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/darthsim/overmind' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/darthsim/overmind -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/darthsim/overmind' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/tmux/tmux',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/darthsim/overmind/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomdarthsimovermindPackage = typeof githubcomdarthsimovermindPackage
