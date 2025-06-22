/**
 * **podlators** - Package from pantry: eyrie.org/eagle/podlators
 *
 * @domain `eyrie.org/eagle/podlators`
 *
 * @install `launchpad install eyrie.org/eagle/podlators`
 * @dependencies `perl.org^5`
 * @companions `PERL5LIB^{{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.eyrieorgeaglepodlators
 * console.log(pkg.name)        // "podlators"
 * console.log(pkg.description) // "Package from pantry: eyrie.org/eagle/podlators"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eyrie-org/eagle/podlators.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eyrieorgeaglepodlatorsPackage = {
  /**
   * The display name of this package.
   */
  name: 'podlators' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eyrie.org/eagle/podlators' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: eyrie.org/eagle/podlators' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install eyrie.org/eagle/podlators' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +eyrie.org/eagle/podlators -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install eyrie.org/eagle/podlators' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/eyrie.org/eagle/podlators/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EyrieorgeaglepodlatorsPackage = typeof eyrieorgeaglepodlatorsPackage
