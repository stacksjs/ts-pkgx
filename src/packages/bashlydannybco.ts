/**
 * **bashly.dannyb.co** - Package from pantry: bashly.dannyb.co
 *
 * @domain `bashly.dannyb.co`
 *
 * @install `launchpad install bashly.dannyb.co`
 * @dependencies `ruby-lang.org^3.1`, `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bashlydannybco
 * console.log(pkg.name)        // "bashly.dannyb.co"
 * console.log(pkg.description) // "Package from pantry: bashly.dannyb.co"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bashly-dannyb-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bashlydannybcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'bashly.dannyb.co' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bashly.dannyb.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bashly.dannyb.co' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bashly.dannyb.co' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bashly.dannyb.co -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bashly.dannyb.co' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bashly.dannyb.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BashlydannybcoPackage = typeof bashlydannybcoPackage
