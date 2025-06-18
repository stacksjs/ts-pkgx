/**
 * **mandoc.bsd.lv** - UNIX manpage compiler toolset
 *
 * @domain `mandoc.bsd.lv`
 * @programs `bsdapropos`, `bsdman`, `bsdsoelim`, `bsdwhatis`, `demandoc`, ... (+1 more)
 * @version `1.14.6` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +mandoc.bsd.lv -- $SHELL -i`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mandocbsdlv
 * console.log(pkg.name)        // "mandoc.bsd.lv"
 * console.log(pkg.description) // "UNIX manpage compiler toolset"
 * console.log(pkg.programs)    // ["bsdapropos", "bsdman", ...]
 * console.log(pkg.versions[0]) // "1.14.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mandoc-bsd-lv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mandocbsdlvPackage = {
  /**
   * The display name of this package.
   */
  name: 'mandoc.bsd.lv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mandoc.bsd.lv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'UNIX manpage compiler toolset' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mandoc.bsd.lv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +mandoc.bsd.lv -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bsdapropos',
    'bsdman',
    'bsdsoelim',
    'bsdwhatis',
    'demandoc',
    'mandoc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.6',
  ] as const,
  aliases: [] as const,
  fullPath: 'mandoc.bsd.lv' as const,
}

export type MandocbsdlvPackage = typeof mandocbsdlvPackage
