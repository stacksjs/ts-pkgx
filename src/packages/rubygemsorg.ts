/**
 * **rubygems.org** - Package from pantry: rubygems.org
 *
 * @domain `rubygems.org`
 *
 * @install `launchpad install rubygems.org`
 * @dependencies `ruby-lang.org>=2.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rubygemsorg
 * console.log(pkg.name)        // "rubygems.org"
 * console.log(pkg.description) // "Package from pantry: rubygems.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rubygems-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubygemsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rubygems.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rubygems.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rubygems.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rubygems.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org>=2.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rubygems.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RubygemsorgPackage = typeof rubygemsorgPackage
