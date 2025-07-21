/**
 * **sentry.io** - Package from pantry: sentry.io
 *
 * @domain `sentry.io`
 *
 * @install `launchpad install sentry.io`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sentryio
 * console.log(pkg.name)        // "sentry.io"
 * console.log(pkg.description) // "Package from pantry: sentry.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sentry-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sentryioPackage = {
  /**
   * The display name of this package.
   */
  name: 'sentry.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sentry.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sentry.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sentry.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sentry.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sentry.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sentry.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SentryioPackage = typeof sentryioPackage
