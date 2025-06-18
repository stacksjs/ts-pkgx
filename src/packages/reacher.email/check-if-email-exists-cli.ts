/**
 * **check_if_email_exists** - Check if an email address exists without sending any email, written in Rust. Comes with a ⚙️ HTTP backend.
 *
 * @domain `reacher.email/check-if-email-exists-cli`
 * @programs `check_if_email_exists`
 * @version `0.11.5` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install check_if_email_exists`
 * @aliases `check_if_email_exists`
 * @dependencies `openssl.org^1.1`, `rust-lang.org>=1.65`, `rust-lang.org/cargo`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.checkifemailexists
 * // Or access via domain
 * const samePkg = pantry.reacheremailcheckifemailexistscli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "check-if-email-exists-cli"
 * console.log(pkg.description) // "Check if an email address exists without sendin..."
 * console.log(pkg.programs)    // ["check_if_email_exists"]
 * console.log(pkg.versions[0]) // "0.11.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/reacher-email/check-if-email-exists-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const checkifemailexistsPackage = {
  /**
   * The display name of this package.
   */
  name: 'check-if-email-exists-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'reacher.email/check-if-email-exists-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Check if an email address exists without sending any email, written in Rust. Comes with a ⚙️ HTTP backend.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/reacher.email/check-if-email-exists-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install check_if_email_exists' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'check_if_email_exists',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.5',
    '0.11.4',
    '0.11.3',
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.1',
    '0.10.0',
    '0.9.1',
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'check_if_email_exists',
  ] as const,
}

export type CheckifemailexistsPackage = typeof checkifemailexistsPackage
