/**
 * **asciidoctor.org** - Package from pantry: asciidoctor.org
 *
 * @domain `asciidoctor.org`
 *
 * @install `launchpad install asciidoctor.org`
 * @dependencies `ruby-lang.org^3.1`, `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.asciidoctororg
 * console.log(pkg.name)        // "asciidoctor.org"
 * console.log(pkg.description) // "Package from pantry: asciidoctor.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/asciidoctor-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciidoctororgPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciidoctor.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'asciidoctor.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: asciidoctor.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install asciidoctor.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +asciidoctor.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install asciidoctor.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org^3.1',
    'rubygems.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/asciidoctor.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AsciidoctororgPackage = typeof asciidoctororgPackage
