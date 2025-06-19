/**
 * **ijg.org** - pkgx package
 *
 * @domain `ijg.org`
 * @programs `cjpeg`, `djpeg`, `jpegtran`, `rdjpgcom`, `wrjpgcom`
 * @version `9f` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +ijg.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ijgorg
 * console.log(pkg.name)        // "ijg.org"
 * console.log(pkg.programs)    // ["cjpeg", "djpeg", ...]
 * console.log(pkg.versions[0]) // "9f" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ijg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ijgorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ijg.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ijg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ijg.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +ijg.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cjpeg',
    'djpeg',
    'jpegtran',
    'rdjpgcom',
    'wrjpgcom',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9f',
    '9e',
    '9.5.0',
  ] as const,
  aliases: [] as const,
}

export type IjgorgPackage = typeof ijgorgPackage
