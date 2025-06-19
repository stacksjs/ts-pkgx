/**
 * **rawdog** - Generate and auto-execute Python scripts in the cli
 *
 * @domain `github.com/abanteai/rawdog`
 * @programs `rawdog`
 * @version `0.1.6` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rawdog`
 * @name `rawdog`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rawdog
 * // Or access via domain
 * const samePkg = pantry.githubcomabanteairawdog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rawdog"
 * console.log(pkg.description) // "Generate and auto-execute Python scripts in the..."
 * console.log(pkg.programs)    // ["rawdog"]
 * console.log(pkg.versions[0]) // "0.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/abanteai/rawdog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rawdogPackage = {
  /**
   * The display name of this package.
   */
  name: 'rawdog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/abanteai/rawdog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate and auto-execute Python scripts in the cli' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/abanteai/rawdog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rawdog' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rawdog',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RawdogPackage = typeof rawdogPackage
