/**
 * **eget** - Easily install prebuilt binaries from GitHub.
 *
 * @domain `github.com/zyedidia/eget`
 * @programs `eget`
 * @version `1.3.4` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install eget`
 * @name `eget`
 * @aliases `Eget`
 * @dependencies `curl.se/ca-certs`, `go.dev`, `pandoc.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eget
 * // Or access via domain
 * const samePkg = pantry.githubcomzyedidiaeget
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eget"
 * console.log(pkg.description) // "Easily install prebuilt binaries from GitHub."
 * console.log(pkg.programs)    // ["eget"]
 * console.log(pkg.versions[0]) // "1.3.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zyedidia/eget.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const egetPackage = {
  /**
   * The display name of this package.
   */
  name: 'eget' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zyedidia/eget' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Easily install prebuilt binaries from GitHub.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zyedidia/eget/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/zyedidia/eget' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install eget' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eget',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
    'go.dev',
    'pandoc.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.4',
    '1.3.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'Eget',
  ] as const,
}

export type EgetPackage = typeof egetPackage
