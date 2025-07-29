/**
 * **swift-create-xcframework** - Package from pantry: github.com/unsignedapps/swift-create-xcframework
 *
 * @domain `github.com/unsignedapps/swift-create-xcframework`
 *
 * @install `launchpad install github.com/unsignedapps/swift-create-xcframework`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomunsignedappsswiftcreatexcframework
 * console.log(pkg.name)        // "swift-create-xcframework"
 * console.log(pkg.description) // "Package from pantry: github.com/unsignedapps/sw..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/unsignedapps/swift-create-xcframework.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomunsignedappsswiftcreatexcframeworkPackage = {
  /**
   * The display name of this package.
   */
  name: 'swift-create-xcframework' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/unsignedapps/swift-create-xcframework' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/unsignedapps/swift-create-xcframework' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/unsignedapps/swift-create-xcframework' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/unsignedapps/swift-create-xcframework -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/unsignedapps/swift-create-xcframework' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/unsignedapps/swift-create-xcframework/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomunsignedappsswiftcreatexcframeworkPackage = typeof githubcomunsignedappsswiftcreatexcframeworkPackage
