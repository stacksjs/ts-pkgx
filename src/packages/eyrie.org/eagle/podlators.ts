/**
 * **pod2man** - pkgx package
 *
 * @domain `eyrie.org/eagle/podlators`
 * @programs `pod2man`, `pod2text`
 * @version `5.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pod2man`
 * @name `pod2man`
 * @dependencies `perl.org^5`
 * @companions `PERL5LIB^{{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pod2man
 * // Or access via domain
 * const samePkg = pantry.eyrieorgeaglepodlators
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pod2man"
 * console.log(pkg.programs)    // ["pod2man", "pod2text"]
 * console.log(pkg.versions[0]) // "5.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eyrie-org/eagle/podlators.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pod2manPackage = {
  /**
   * The display name of this package.
   */
  name: 'pod2man' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eyrie.org/eagle/podlators' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/eyrie.org/eagle/podlators/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pod2man' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pod2man',
    'pod2text',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^{{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org^5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +eyrie.org/eagle/podlators -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pod2man' as const,
}

export type Pod2manPackage = typeof pod2manPackage
