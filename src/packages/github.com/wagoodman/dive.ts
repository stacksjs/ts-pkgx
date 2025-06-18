/**
 * **dive** - A tool for exploring each layer in a docker image
 *
 * @domain `github.com/wagoodman/dive`
 * @programs `dive`
 * @version `0.13.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dive`
 * @name `dive`
 * @dependencies `go.dev^1.19`, `goreleaser.com`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dive
 * // Or access via domain
 * const samePkg = pantry.githubcomwagoodmandive
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dive"
 * console.log(pkg.description) // "A tool for exploring each layer in a docker image"
 * console.log(pkg.programs)    // ["dive"]
 * console.log(pkg.versions[0]) // "0.13.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/wagoodman/dive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const divePackage = {
  /**
   * The display name of this package.
   */
  name: 'dive' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/wagoodman/dive' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool for exploring each layer in a docker image' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/wagoodman/dive/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/wagoodman/dive' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install dive' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dive',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
    'goreleaser.com',
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.1',
    '0.13.0',
    '0.12.0',
    '0.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type DivePackage = typeof divePackage
