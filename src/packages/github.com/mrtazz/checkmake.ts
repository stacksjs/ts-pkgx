/**
 * **checkmake** - experimental linter/analyzer for Makefiles
 *
 * @domain `github.com/mrtazz/checkmake`
 * @programs `checkmake`
 * @version `0.2.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install checkmake`
 * @name `checkmake`
 * @dependencies `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.checkmake
 * // Or access via domain
 * const samePkg = pantry.githubcommrtazzcheckmake
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "checkmake"
 * console.log(pkg.description) // "experimental linter/analyzer for Makefiles"
 * console.log(pkg.programs)    // ["checkmake"]
 * console.log(pkg.versions[0]) // "0.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mrtazz/checkmake.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const checkmakePackage = {
  /**
   * The display name of this package.
   */
  name: 'checkmake' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mrtazz/checkmake' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'experimental linter/analyzer for Makefiles' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mrtazz/checkmake/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install checkmake' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'checkmake',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CheckmakePackage = typeof checkmakePackage
