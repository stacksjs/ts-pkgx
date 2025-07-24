/**
 * **xcodeproj** - Package from pantry: cocoapods.org/xcodeproj
 *
 * @domain `cocoapods.org/xcodeproj`
 *
 * @install `launchpad install cocoapods.org/xcodeproj`
 * @dependencies `ruby-lang.org~3.2`, `rubygems.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cocoapodsorgxcodeproj
 * console.log(pkg.name)        // "xcodeproj"
 * console.log(pkg.description) // "Package from pantry: cocoapods.org/xcodeproj"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cocoapods-org/xcodeproj.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cocoapodsorgxcodeprojPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcodeproj' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cocoapods.org/xcodeproj' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cocoapods.org/xcodeproj' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cocoapods.org/xcodeproj' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cocoapods.org/xcodeproj -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cocoapods.org/xcodeproj' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org~3.2',
    'rubygems.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cocoapods.org/xcodeproj/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CocoapodsorgxcodeprojPackage = typeof cocoapodsorgxcodeprojPackage
