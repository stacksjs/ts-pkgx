/**
 * **goreleaser** - Deliver Go binaries as fast and easily as possible
 *
 * @domain `goreleaser.com`
 * @programs `goreleaser`
 * @version `2.12.1` (46 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install goreleaser`
 * @name `goreleaser`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.goreleaser
 * // Or access via domain
 * const samePkg = pantry.goreleasercom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "goreleaser"
 * console.log(pkg.description) // "Deliver Go binaries as fast and easily as possible"
 * console.log(pkg.programs)    // ["goreleaser"]
 * console.log(pkg.versions[0]) // "2.12.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/goreleaser-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const goreleaserPackage = {
  /**
   * The display name of this package.
   */
  name: 'goreleaser' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'goreleaser.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Deliver Go binaries as fast and easily as possible' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/goreleaser.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install goreleaser' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'goreleaser',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.12.1',
    '2.12.0',
    '2.11.2',
    '2.11.1',
    '2.11.0',
    '2.10.2',
    '2.10.1',
    '2.10.0',
    '2.9.0',
    '2.8.2',
    '2.8.1',
    '2.8.0',
    '2.7.0',
    '2.6.1',
    '2.6.0',
    '2.5.1',
    '2.5.0',
    '2.4.8',
    '2.4.7',
    '2.4.6',
    '2.4.5',
    '2.4.4',
    '2.4.3',
    '2.4.2',
    '2.4.1',
    '2.4.0',
    '2.3.2',
    '2.3.1',
    '2.3.0',
    '2.2.0',
    '2.1.0',
    '2.0.1',
    '2.0.0',
    '1.26.2',
    '1.26.1',
    '1.26.0',
    '1.25.1',
    '1.25.0',
    '1.24.0',
    '1.23.0',
    '1.22.1',
    '1.22.0',
    '1.21.2',
    '1.21.1',
    '1.21.0',
    '1.20.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) goreleaser -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install goreleaser' as const,
}

export type GoreleaserPackage = typeof goreleaserPackage
