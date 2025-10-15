/**
 * **overmind** - Process manager for Procfile-based applications and tmux
 *
 * @domain `github.com/darthsim/overmind`
 * @programs `overmind`
 * @version `2.5.1` (3 versions available)
 * @versions From newest version to oldest.
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
 * console.log(pkg.description) // "Process manager for Procfile-based applications..."
 * console.log(pkg.programs)    // ["overmind"]
 * console.log(pkg.versions[0]) // "2.5.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/darthsim/overmind.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const overmindPackage = {
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
  description: 'Process manager for Procfile-based applications and tmux' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/darthsim/overmind/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/DarthSim/overmind' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/darthsim/overmind' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/darthsim/overmind -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/darthsim/overmind' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'overmind',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/tmux/tmux',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.1',
    '2.5.0',
    '2.4.0',
  ] as const,
  aliases: [] as const,
}

export type OvermindPackage = typeof overmindPackage
