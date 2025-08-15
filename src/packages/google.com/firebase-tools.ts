/**
 * **firebase** - The Firebase Command Line Tools
 *
 * @domain `google.com/firebase-tools`
 * @programs `firebase`
 * @version `14.12.1` (107 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install firebase`
 * @name `firebase`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.firebase
 * // Or access via domain
 * const samePkg = pantry.googlecomfirebasetools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "firebase"
 * console.log(pkg.description) // "The Firebase Command Line Tools"
 * console.log(pkg.programs)    // ["firebase"]
 * console.log(pkg.versions[0]) // "14.12.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/firebase-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const firebasePackage = {
  /**
   * The display name of this package.
   */
  name: 'firebase' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/firebase-tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Firebase Command Line Tools' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/firebase-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install firebase' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'firebase',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '14.12.1',
    '14.12.0',
    '14.11.2',
    '14.11.1',
    '14.11.0',
    '14.10.1',
    '14.10.0',
    '14.9.0',
    '14.8.0',
    '14.7.0',
    '14.6.0',
    '14.5.1',
    '14.5.0',
    '14.4.0',
    '14.3.1',
    '14.3.0',
    '14.2.2',
    '14.2.1',
    '14.2.0',
    '14.1.0',
    '14.0.1',
    '14.0.0',
    '13.35.1',
    '13.35.0',
    '13.34.0',
    '13.33.0',
    '13.32.0',
    '13.31.2',
    '13.31.1',
    '13.31.0',
    '13.30.0',
    '13.29.3',
    '13.29.2',
    '13.29.1',
    '13.29.0',
    '13.28.0',
    '13.27.0',
    '13.26.0',
    '13.25.0',
    '13.24.2',
    '13.24.1',
    '13.24.0',
    '13.23.1',
    '13.22.1',
    '13.22.0',
    '13.21.0',
    '13.20.2',
    '13.20.1',
    '13.20.0',
    '13.19.0',
    '13.18.0',
    '13.17.0',
    '13.16.0',
    '13.15.4',
    '13.15.3',
    '13.15.2',
    '13.15.1',
    '13.15.0',
    '13.14.2',
    '13.14.1',
    '13.14.0',
    '13.13.3',
    '13.13.2',
    '13.13.1',
    '13.13.0',
    '13.12.0',
    '13.11.4',
    '13.11.3',
    '13.11.2',
    '13.11.1',
    '13.11.0',
    '13.10.2',
    '13.10.1',
    '13.10.0',
    '13.9.0',
    '13.8.3',
    '13.8.2',
    '13.8.1',
    '13.8.0',
    '13.7.5',
    '13.7.4',
    '13.7.3',
    '13.7.2',
    '13.7.1',
    '13.7.0',
    '13.6.1',
    '13.6.0',
    '13.5.2',
    '13.5.1',
    '13.5.0',
    '13.4.1',
    '13.4.0',
    '13.3.1',
    '13.3.0',
    '13.2.1',
    '13.2.0',
    '13.1.0',
    '13.0.3',
    '13.0.2',
    '13.0.1',
    '13.0.0',
    '12.9.1',
    '12.9.0',
    '12.8.1',
    '12.8.0',
    '12.7.0',
    '12.6.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) firebase -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install firebase' as const,
}

export type FirebasePackage = typeof firebasePackage
