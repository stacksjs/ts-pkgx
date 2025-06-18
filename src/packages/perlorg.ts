/**
 * **perl.org** - Package from pantry: perl.org
 *
 * @domain `perl.org`
 *
 * @install `launchpad install perl.org`
 * @dependencies `llvm.org<17`, `gnu.org/make`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.perlorg
 * console.log(pkg.name)        // "perl.org"
 * console.log(pkg.description) // "Package from pantry: perl.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/perl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const perlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'perl.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'perl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: perl.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install perl.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'llvm.org<17',
    'gnu.org/make',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/perl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PerlorgPackage = typeof perlorgPackage
