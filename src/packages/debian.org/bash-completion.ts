/**
 * **bash-completion** - Package from pantry: debian.org/bash-completion
 *
 * @domain `debian.org/bash-completion`
 *
 * @install `launchpad install debian.org/bash-completion`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.debianorgbashcompletion
 * console.log(pkg.name)        // "bash-completion"
 * console.log(pkg.description) // "Package from pantry: debian.org/bash-completion"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/debian-org/bash-completion.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const debianorgbashcompletionPackage = {
  /**
   * The display name of this package.
   */
  name: 'bash-completion' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'debian.org/bash-completion' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: debian.org/bash-completion' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install debian.org/bash-completion' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +debian.org/bash-completion -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install debian.org/bash-completion' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/bash-completion/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DebianorgbashcompletionPackage = typeof debianorgbashcompletionPackage
