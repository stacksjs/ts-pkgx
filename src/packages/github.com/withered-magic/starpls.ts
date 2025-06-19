/**
 * **starpls** - An LSP implementation for Starlark, the configuration language used by Bazel and Buck2.
 *
 * @domain `github.com/withered-magic/starpls`
 * @programs `starpls`
 * @version `0.1.21` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install starpls`
 * @name `starpls`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.starpls
 * // Or access via domain
 * const samePkg = pantry.githubcomwitheredmagicstarpls
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "starpls"
 * console.log(pkg.description) // "An LSP implementation for Starlark, the configu..."
 * console.log(pkg.programs)    // ["starpls"]
 * console.log(pkg.versions[0]) // "0.1.21" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/withered-magic/starpls.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const starplsPackage = {
  /**
   * The display name of this package.
   */
  name: 'starpls' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/withered-magic/starpls' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An LSP implementation for Starlark, the configuration language used by Bazel and Buck2.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/withered-magic/starpls/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install starpls' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'starpls',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.21',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type StarplsPackage = typeof starplsPackage
