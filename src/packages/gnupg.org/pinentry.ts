/**
 * **pinentry** - Passphrase entry dialog utilizing the Assuan protocol
 *
 * @domain `gnupg.org/pinentry`
 * @programs `pinentry`, `pinentry-tty`
 * @version `1.3.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pinentry`
 * @name `pinentry`
 * @dependencies `gnupg.org/libassuan`, `gnupg.org/libgpg-error`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pinentry
 * // Or access via domain
 * const samePkg = pantry.gnupgorgpinentry
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pinentry"
 * console.log(pkg.description) // "Passphrase entry dialog utilizing the Assuan pr..."
 * console.log(pkg.programs)    // ["pinentry", "pinentry-tty"]
 * console.log(pkg.versions[0]) // "1.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/pinentry.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pinentryPackage = {
  /**
   * The display name of this package.
   */
  name: 'pinentry' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/pinentry' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Passphrase entry dialog utilizing the Assuan protocol' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/pinentry/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pinentry' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pinentry',
    'pinentry-tty',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnupg.org/libassuan',
    'gnupg.org/libgpg-error',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/pinentry -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pinentry' as const,
}

export type PinentryPackage = typeof pinentryPackage
