/**
 * **SwiftFormat** - Package from pantry: github.com/nicklockwood/SwiftFormat
 *
 * @domain `github.com/nicklockwood/SwiftFormat`
 *
 * @install `launchpad install github.com/nicklockwood/SwiftFormat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnicklockwoodswiftformat
 * console.log(pkg.name)        // "SwiftFormat"
 * console.log(pkg.description) // "Package from pantry: github.com/nicklockwood/Sw..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nicklockwood/SwiftFormat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnicklockwoodswiftformatPackage = {
  /**
   * The display name of this package.
   */
  name: 'SwiftFormat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nicklockwood/SwiftFormat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/nicklockwood/SwiftFormat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/nicklockwood/SwiftFormat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nicklockwood/SwiftFormat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/nicklockwood/SwiftFormat' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nicklockwood/SwiftFormat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnicklockwoodswiftformatPackage = typeof githubcomnicklockwoodswiftformatPackage
