/**
 * **debian.org/bash-completion** - pkgx package
 *
 * @domain `debian.org/bash/completion`
 *
 * @install `pkgx debian.org/bash-completion`
 * @name `bash-completion`
 * @aliases `debian.org/bash-completion`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.debianorgbashcompletion
 * // Or access via domain
 * const samePkg = pantry.debianorgbashcompletion
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bash-completion"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/debian-org/bash/completion.md
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
  domain: 'debian.org/bash/completion' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx debian.org/bash-completion' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'debian.org/bash-completion',
  ] as const,
  fullPath: 'debian.org/bash-completion' as const,
}

export type DebianorgbashcompletionPackage = typeof debianorgbashcompletionPackage
