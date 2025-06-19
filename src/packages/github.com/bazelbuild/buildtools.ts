/**
 * **buildifier** - Format bazel BUILD files with a standard convention
 *
 * @domain `github.com/bazelbuild/buildtools`
 * @programs `buildifier`
 * @version `8.2.1` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install buildifier`
 * @aliases `buildifier`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.buildifier
 * // Or access via domain
 * const samePkg = pantry.githubcombazelbuildbuildtools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "buildtools"
 * console.log(pkg.description) // "Format bazel BUILD files with a standard conven..."
 * console.log(pkg.programs)    // ["buildifier"]
 * console.log(pkg.versions[0]) // "8.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/bazelbuild/buildtools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const buildifierPackage = {
  /**
   * The display name of this package.
   */
  name: 'buildtools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/bazelbuild/buildtools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Format bazel BUILD files with a standard convention' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/bazelbuild/buildtools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install buildifier' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'buildifier',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.2.1',
    '8.2.0',
    '8.0.3',
    '8.0.2',
    '8.0.1',
    '8.0.0',
    '7.3.1',
    '7.1.2',
    '7.1.1',
    '7.1.0',
    '6.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'buildifier',
  ] as const,
}

export type BuildifierPackage = typeof buildifierPackage
