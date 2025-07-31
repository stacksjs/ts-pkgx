/**
 * **check-if-email-exists-cli** - Package from pantry: reacher.email/check-if-email-exists-cli
 *
 * @domain `reacher.email/check-if-email-exists-cli`
 *
 * @install `launchpad install reacher.email/check-if-email-exists-cli`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.reacheremailcheckifemailexistscli
 * console.log(pkg.name)        // "check-if-email-exists-cli"
 * console.log(pkg.description) // "Package from pantry: reacher.email/check-if-ema..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/reacher-email/check-if-email-exists-cli.md
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
  domain: 'reacher.email/check-if-email-exists-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: reacher.email/check-if-email-exists-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install reacher.email/check-if-email-exists-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +reacher.email/check-if-email-exists-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install reacher.email/check-if-email-exists-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/reacher.email/check-if-email-exists-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ReacheremailcheckifemailexistscliPackage = typeof reacheremailcheckifemailexistscliPackage
