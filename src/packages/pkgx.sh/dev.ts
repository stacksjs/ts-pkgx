/**
 * **dev** - isolated `dev` environments
 *
 * @domain `pkgx.sh/dev`
 * @programs `dev`
 * @version `1.8.1` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dev`
 * @name `dev`
 * @dependencies `pkgx.sh^1,^2.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dev
 * // Or access via domain
 * const samePkg = pantry.pkgxshdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dev"
 * console.log(pkg.description) // "isolated `dev` environments"
 * console.log(pkg.programs)    // ["dev"]
 * console.log(pkg.versions[0]) // "1.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const devPackage = {
  /**
   * The display name of this package.
   */
  name: 'dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh/dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'isolated `dev` environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dev' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dev',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1,^2.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.1',
    '1.8.0',
    '1.7.0',
    '1.6.0',
    '1.5.0',
    '1.4.0',
    '1.3.0',
    '1.2.0',
    '1.1.0',
    '1.0.2',
    '1.0.1',
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dev' as const,
}

export type DevPackage = typeof devPackage
