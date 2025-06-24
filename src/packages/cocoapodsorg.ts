/**
 * **cocoapods.org** - Package from pantry: cocoapods.org
 *
 * @domain `cocoapods.org`
 *
 * @install `launchpad install cocoapods.org`
 * @dependencies `ruby-lang.org~3.2`, `sourceware.org/libffi^3`, `rubygems.org^3`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cocoapodsorg
 * console.log(pkg.name)        // "cocoapods.org"
 * console.log(pkg.description) // "Package from pantry: cocoapods.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cocoapods-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cocoapodsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cocoapods.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cocoapods.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cocoapods.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cocoapods.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cocoapods.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cocoapods.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org~3.2',
    'sourceware.org/libffi^3',
    'rubygems.org^3',
    'git-scm.org^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cocoapods.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CocoapodsorgPackage = typeof cocoapodsorgPackage
