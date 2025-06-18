/**
 * **eclint** - pkgx package
 *
 * @domain `gitlab.com/greut/eclint`
 * @programs `eclint`
 * @version `0.5.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install eclint`
 * @name `eclint`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eclint
 * // Or access via domain
 * const samePkg = pantry.gitlabcomgreuteclint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eclint"
 * console.log(pkg.programs)    // ["eclint"]
 * console.log(pkg.versions[0]) // "0.5.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/greut/eclint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eclintPackage = {
  /**
   * The display name of this package.
   */
  name: 'eclint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/greut/eclint' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/greut/eclint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install eclint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eclint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.1',
    '0.5.0',
    '0.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type EclintPackage = typeof eclintPackage
