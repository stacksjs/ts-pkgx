/**
 * **fastlane.tools** - Package from pantry: fastlane.tools
 *
 * @domain `fastlane.tools`
 *
 * @install `launchpad install fastlane.tools`
 * @dependencies `ruby-lang.org~3.2`, `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fastlanetools
 * console.log(pkg.name)        // "fastlane.tools"
 * console.log(pkg.description) // "Package from pantry: fastlane.tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fastlane-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastlanetoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'fastlane.tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fastlane.tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fastlane.tools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fastlane.tools' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fastlane.tools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fastlane.tools' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org~3.2',
    'rubygems.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fastlane.tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FastlanetoolsPackage = typeof fastlanetoolsPackage
