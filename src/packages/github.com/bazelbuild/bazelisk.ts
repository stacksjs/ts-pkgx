/**
 * **bazel** - A user-friendly launcher for Bazel.
 *
 * @domain `github.com/bazelbuild/bazelisk`
 * @programs `bazel`, `bazelisk`
 * @version `1.26.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/bazelbuild/bazelisk -- $SHELL -i`
 * @aliases `bazel`
 * @dependencies `curl.se/ca-certs`, `go.dev^1.20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bazel
 * // Or access via domain
 * const samePkg = pantry.githubcombazelbuildbazelisk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bazelisk"
 * console.log(pkg.description) // "A user-friendly launcher for Bazel."
 * console.log(pkg.programs)    // ["bazel", "bazelisk"]
 * console.log(pkg.versions[0]) // "1.26.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/bazelbuild/bazelisk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bazelPackage = {
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
  description: 'A user-friendly launcher for Bazel.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/bazelbuild/bazelisk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/bazelbuild/bazelisk -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bazel',
    'bazelisk',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
    'go.dev^1.20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.26.0',
    '1.25.0',
    '1.24.1',
    '1.24.0',
    '1.23.0',
    '1.22.1',
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bazel',
  ] as const,
}

export type BazelPackage = typeof bazelPackage
