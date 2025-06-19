/**
 * **hadolint** - Dockerfile linter, validate inline bash, written in Haskell
 *
 * @domain `github.com/hadolint/hadolint`
 * @programs `hadolint`
 * @version `2.12.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install hadolint`
 * @name `hadolint`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hadolint
 * // Or access via domain
 * const samePkg = pantry.githubcomhadolinthadolint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hadolint"
 * console.log(pkg.description) // "Dockerfile linter, validate inline bash, writte..."
 * console.log(pkg.programs)    // ["hadolint"]
 * console.log(pkg.versions[0]) // "2.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hadolint/hadolint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hadolintPackage = {
  /**
   * The display name of this package.
   */
  name: 'hadolint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hadolint/hadolint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Dockerfile linter, validate inline bash, written in Haskell' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hadolint/hadolint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install hadolint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hadolint',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type HadolintPackage = typeof hadolintPackage
