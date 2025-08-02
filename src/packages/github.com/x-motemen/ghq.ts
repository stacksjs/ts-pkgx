/**
 * **ghq** - Remote repository management made easy
 *
 * @domain `github.com/x-motemen/ghq`
 * @programs `ghq`
 * @version `1.8.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ghq`
 * @name `ghq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ghq
 * // Or access via domain
 * const samePkg = pantry.githubcomxmotemenghq
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ghq"
 * console.log(pkg.description) // "Remote repository management made easy"
 * console.log(pkg.programs)    // ["ghq"]
 * console.log(pkg.versions[0]) // "1.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/x-motemen/ghq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ghqPackage = {
  /**
   * The display name of this package.
   */
  name: 'ghq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/x-motemen/ghq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Remote repository management made easy' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/x-motemen/ghq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/x-motemen/ghq' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ghq' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ghq',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.0',
    '1.7.1',
    '1.7.0',
    '1.6.3',
    '1.6.2',
    '1.6.1',
    '1.6.0',
    '1.5.0',
    '1.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ghq -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ghq' as const,
}

export type GhqPackage = typeof ghqPackage
