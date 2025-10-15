/**
 * **rename** - Rename multiple files
 *
 * @domain `plasmasturm.org/rename`
 * @programs `rename`
 * @version `1.601.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install plasmasturm.org/rename`
 * @homepage http://plasmasturm.org/code/rename/
 * @dependencies `perl.org>=5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.plasmasturmorgrename
 * console.log(pkg.name)        // "rename"
 * console.log(pkg.description) // "Rename multiple files"
 * console.log(pkg.programs)    // ["rename"]
 * console.log(pkg.versions[0]) // "1.601.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plasmasturm-org/rename.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plasmasturmorgrenamePackage = {
  /**
   * The display name of this package.
   */
  name: 'rename' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plasmasturm.org/rename' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Rename multiple files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plasmasturm.org/rename/package.yml' as const,
  homepageUrl: 'http://plasmasturm.org/code/rename/' as const,
  githubUrl: 'https://github.com/ap/rename' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install plasmasturm.org/rename' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +plasmasturm.org/rename -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install plasmasturm.org/rename' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rename',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org>=5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.601.0',
  ] as const,
  aliases: [] as const,
}

export type PlasmasturmorgrenamePackage = typeof plasmasturmorgrenamePackage
