/**
 * **rome** - Unified developer tools for JavaScript, TypeScript, and the web
 *
 * @domain `rome.tools`
 * @programs `rome`
 * @version `0.4.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rome`
 * @name `rome`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rome
 * // Or access via domain
 * const samePkg = pantry.rometools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rome"
 * console.log(pkg.description) // "Unified developer tools for JavaScript, TypeScr..."
 * console.log(pkg.programs)    // ["rome"]
 * console.log(pkg.versions[0]) // "0.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rome-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const romePackage = {
  /**
   * The display name of this package.
   */
  name: 'rome' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rome.tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Unified developer tools for JavaScript, TypeScript, and the web' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rome.tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rome' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rome',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) rome -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rome' as const,
}

export type RomePackage = typeof romePackage
