/**
 * **debian.org/bash-completion** - pkgx package
 *
 * @domain `debian.org/bash-completion`
 * @version `2.11.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install debian.org/bash-completion`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.debianorgbashcompletion
 * console.log(pkg.name)        // "debian.org/bash-completion"
 * console.log(pkg.versions[0]) // "2.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/debian-org/bash-completion.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const debianorgbashcompletionPackage = {
  /**
   * The display name of this package.
   */
  name: 'debian.org/bash-completion' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'debian.org/bash-completion' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/bash-completion/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install debian.org/bash-completion' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.11.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +debian.org/bash-completion -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install debian.org/bash-completion' as const,
}

export type DebianorgbashcompletionPackage = typeof debianorgbashcompletionPackage
