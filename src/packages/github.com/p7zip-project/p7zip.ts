/**
 * **p7zip-project/p7zip** - A new p7zip fork with additional codecs and improvements (forked from https://sourceforge.net/projects/sevenzip/ AND https://sourceforge.net/projects/p7zip/).
 *
 * @domain `github.com/p7zip-project/p7zip`
 * @programs `7z`, `7za`, `7zr`
 * @version `17.5.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/p7zip-project/p7zip -- $SHELL -i`
 * @aliases `p7zip-project/p7zip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.p7zipprojectp7zip
 * // Or access via domain
 * const samePkg = pantry.githubcomp7zipprojectp7zip
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/p7zip-project/p7zip"
 * console.log(pkg.description) // "A new p7zip fork with additional codecs and imp..."
 * console.log(pkg.programs)    // ["7z", "7za", ...]
 * console.log(pkg.versions[0]) // "17.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/p7zip-project/p7zip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const p7zipprojectp7zipPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/p7zip-project/p7zip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/p7zip-project/p7zip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A new p7zip fork with additional codecs and improvements (forked from https://sourceforge.net/projects/sevenzip/ AND https://sourceforge.net/projects/p7zip/).' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/p7zip-project/p7zip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/p7zip-project/p7zip -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    '7z',
    '7za',
    '7zr',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '17.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'p7zip-project/p7zip',
  ] as const,
  fullPath: 'github.com/p7zip-project/p7zip' as const,
}

export type P7zipprojectp7zipPackage = typeof p7zipprojectp7zipPackage
