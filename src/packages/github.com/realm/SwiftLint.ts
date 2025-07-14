/**
 * **SwiftLint** - Package from pantry: github.com/realm/SwiftLint
 *
 * @domain `github.com/realm/SwiftLint`
 *
 * @install `launchpad install github.com/realm/SwiftLint`
 * @dependencies `linux:curl.se@8`, `linux:gnome.org/libxml2@2` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomrealmswiftlint
 * console.log(pkg.name)        // "SwiftLint"
 * console.log(pkg.description) // "Package from pantry: github.com/realm/SwiftLint"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/realm/SwiftLint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomrealmswiftlintPackage = {
  /**
   * The display name of this package.
   */
  name: 'SwiftLint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/realm/SwiftLint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/realm/SwiftLint' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/realm/SwiftLint' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/realm/SwiftLint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/realm/SwiftLint' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:curl.se@8',
    'linux:gnome.org/libxml2@2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/realm/SwiftLint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomrealmswiftlintPackage = typeof githubcomrealmswiftlintPackage
