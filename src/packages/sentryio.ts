/**
 * **sentry-cli** - Command-line utility to interact with Sentry
 *
 * @domain `sentry.io`
 * @programs `sentry-cli`
 * @version `2.50.0` (50 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sentry-cli`
 * @name `sentry-cli`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sentrycli
 * // Or access via domain
 * const samePkg = pantry.sentryio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sentry-cli"
 * console.log(pkg.description) // "Command-line utility to interact with Sentry"
 * console.log(pkg.programs)    // ["sentry-cli"]
 * console.log(pkg.versions[0]) // "2.50.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sentry-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sentrycliPackage = {
  /**
   * The display name of this package.
   */
  name: 'sentry-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sentry.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line utility to interact with Sentry' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sentry.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sentry-cli' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sentry-cli',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.50.0',
    '2.49.0',
    '2.48.0',
    '2.47.1',
    '2.47.0',
    '2.46.0',
    '2.45.0',
    '2.44.0',
    '2.43.1',
    '2.43.0',
    '2.42.5',
    '2.42.4',
    '2.42.3',
    '2.42.2',
    '2.42.1',
    '2.42.0',
    '2.41.1',
    '2.41.0',
    '2.40.0',
    '2.39.1',
    '2.39.0',
    '2.38.2',
    '2.38.1',
    '2.38.0',
    '2.37.0',
    '2.36.6',
    '2.36.5',
    '2.36.4',
    '2.36.3',
    '2.36.2',
    '2.36.1',
    '2.36.0',
    '2.35.0',
    '2.34.1',
    '2.34.0',
    '2.33.1',
    '2.33.0',
    '2.32.2',
    '2.32.1',
    '2.32.0',
    '2.31.2',
    '2.31.1',
    '2.31.0',
    '2.30.5',
    '2.30.4',
    '2.30.3',
    '2.30.2',
    '2.30.1',
    '2.30.0',
    '2.29.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) sentry-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sentry-cli' as const,
}

export type SentrycliPackage = typeof sentrycliPackage
