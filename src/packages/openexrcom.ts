/**
 * **exr2aces** - The OpenEXR project provides the specification and reference implementation of the EXR file format, the professional-grade image storage format of the motion picture industry.
 *
 * @domain `openexr.com`
 * @programs `exr2aces`, `exrenvmap`, `exrheader`, `exrmakepreview`, `exrmaketiled`, ... (+3 more)
 * @version `3.3.5` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install exr2aces`
 * @name `exr2aces`
 * @dependencies `zlib.net^1`, `openexr.com/imath`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.exr2aces
 * // Or access via domain
 * const samePkg = pantry.openexrcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "exr2aces"
 * console.log(pkg.description) // "The OpenEXR project provides the specification ..."
 * console.log(pkg.programs)    // ["exr2aces", "exrenvmap", ...]
 * console.log(pkg.versions[0]) // "3.3.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openexr-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const exr2acesPackage = {
  /**
   * The display name of this package.
   */
  name: 'exr2aces' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openexr.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The OpenEXR project provides the specification and reference implementation of the EXR file format, the professional-grade image storage format of the motion picture industry.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openexr.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install exr2aces' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'exr2aces',
    'exrenvmap',
    'exrheader',
    'exrmakepreview',
    'exrmaketiled',
    'exrmultipart',
    'exrmultiview',
    'exrstdattr',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'openexr.com/imath',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.5',
    '3.3.4',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.126',
    '3.2.4',
    '3.2.3',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.13',
    '3.1.12',
    '3.1.11',
    '3.1.10',
    '3.1.9',
    '3.1.8',
    '3.1.7',
    '3.1.6',
    '2.5.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openexr.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install exr2aces' as const,
}

export type Exr2acesPackage = typeof exr2acesPackage
