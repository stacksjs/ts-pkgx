/**
 * **reacher.email/check-if-email-exists-cli** - pkgx package
 *
 * @domain `reacher.email/check/if-email-exists-cli`
 *
 * @install `pkgx reacher.email/check-if-email-exists-cli`
 * @name `check-if-email-exists-cli`
 * @aliases `reacher.email/check-if-email-exists-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.reacheremailcheckifemailexistscli
 * // Or access via domain
 * const samePkg = pantry.reacheremailcheckifemailexistscli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "check-if-email-exists-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/reacher-email/check/if-email-exists-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const reacheremailcheckifemailexistscliPackage = {
  /**
   * The display name of this package.
   */
  name: 'check-if-email-exists-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'reacher.email/check/if-email-exists-cli' as const,
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
  installCommand: 'pkgx reacher.email/check-if-email-exists-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'reacher.email/check-if-email-exists-cli',
  ] as const,
  fullPath: 'reacher.email/check-if-email-exists-cli' as const,
}

export type ReacheremailcheckifemailexistscliPackage = typeof reacheremailcheckifemailexistscliPackage
