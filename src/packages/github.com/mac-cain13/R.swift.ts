/**
 * **R.swift** - Package from pantry: github.com/mac-cain13/R.swift
 *
 * @domain `github.com/mac-cain13/R.swift`
 *
 * @install `launchpad install github.com/mac-cain13/R.swift`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommaccain13rswift
 * console.log(pkg.name)        // "R.swift"
 * console.log(pkg.description) // "Package from pantry: github.com/mac-cain13/R.swift"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mac-cain13/R-swift.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommaccain13rswiftPackage = {
  /**
   * The display name of this package.
   */
  name: 'R.swift' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mac-cain13/R.swift' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mac-cain13/R.swift' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mac-cain13/R.swift' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mac-cain13/R.swift -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mac-cain13/R.swift' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mac-cain13/R.swift/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcommaccain13rswiftPackage = typeof githubcommaccain13rswiftPackage
