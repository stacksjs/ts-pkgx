/**
 * **libjpeg-turbo.org** - Main libjpeg-turbo repository
 *
 * @domain `libjpeg-turbo.org`
 * @programs `cjpeg`, `djpeg`, `jpegtran`, `rdjpgcom`, `tjbench`, ... (+1 more)
 * @version `3.1.1` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libjpeg-turbo.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libjpegturboorg
 * console.log(pkg.name)        // "libjpeg-turbo.org"
 * console.log(pkg.description) // "Main libjpeg-turbo repository"
 * console.log(pkg.programs)    // ["cjpeg", "djpeg", ...]
 * console.log(pkg.versions[0]) // "3.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libjpeg-turbo-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libjpegturboorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libjpeg-turbo.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libjpeg-turbo.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Main libjpeg-turbo repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libjpeg-turbo.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +libjpeg-turbo.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cjpeg',
    'djpeg',
    'jpegtran',
    'rdjpgcom',
    'tjbench',
    'wrjpgcom',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.1',
    '3.1.0',
    '3.0.4',
    '3.0.3',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.1.5.1',
  ] as const,
  aliases: [] as const,
}

export type LibjpegturboorgPackage = typeof libjpegturboorgPackage
