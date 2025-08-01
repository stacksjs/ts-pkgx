/**
 * **spacer** - Small command-line utility for adding spacers to command output
 *
 * @domain `github.com/samwho/spacer`
 * @programs `spacer`
 * @version `0.4.5` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install spacer`
 * @name `spacer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.spacer
 * // Or access via domain
 * const samePkg = pantry.githubcomsamwhospacer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "spacer"
 * console.log(pkg.description) // "Small command-line utility for adding spacers t..."
 * console.log(pkg.programs)    // ["spacer"]
 * console.log(pkg.versions[0]) // "0.4.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/samwho/spacer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spacerPackage = {
  /**
   * The display name of this package.
   */
  name: 'spacer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/samwho/spacer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Small command-line utility for adding spacers to command output' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/samwho/spacer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install spacer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'spacer',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.5',
    '0.4.2',
    '0.4.1',
    '0.3.9',
    '0.3.8',
    '0.3.7',
    '0.3.5',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) spacer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install spacer' as const,
}

export type SpacerPackage = typeof spacerPackage
