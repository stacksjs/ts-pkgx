/**
 * **bazelisk** - Package from pantry: github.com/bazelbuild/bazelisk
 *
 * @domain `github.com/bazelbuild/bazelisk`
 *
 * @install `launchpad install github.com/bazelbuild/bazelisk`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombazelbuildbazelisk
 * console.log(pkg.name)        // "bazelisk"
 * console.log(pkg.description) // "Package from pantry: github.com/bazelbuild/baze..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/bazelbuild/bazelisk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombazelbuildbazeliskPackage = {
  /**
   * The display name of this package.
   */
  name: 'bazelisk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/bazelbuild/bazelisk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/bazelbuild/bazelisk' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/bazelbuild/bazelisk' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/bazelbuild/bazelisk -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/bazelbuild/bazelisk' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/bazelbuild/bazelisk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcombazelbuildbazeliskPackage = typeof githubcombazelbuildbazeliskPackage
