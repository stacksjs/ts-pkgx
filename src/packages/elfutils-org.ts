/**
 * **elfutils.org** - pkgx package
 *
 * @domain `elfutils.org`
 * @programs `eu-addr2line`, `eu-ar`, `eu-elfclassify`, `eu-elfcmp`, `eu-elfcompress`, ... (+11 more)
 * @version `0.193.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +elfutils.org -- $SHELL -i`
 * @dependencies `sourceware.org/bzip2`, `tukaani.org/xz`, `zlib.net`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elfutilsorg
 * console.log(pkg.name)        // "elfutils.org"
 * console.log(pkg.programs)    // ["eu-addr2line", "eu-ar", ...]
 * console.log(pkg.versions[0]) // "0.193.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elfutils-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elfutilsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'elfutils.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elfutils.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elfutils.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +elfutils.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eu-addr2line',
    'eu-ar',
    'eu-elfclassify',
    'eu-elfcmp',
    'eu-elfcompress',
    'eu-elflint',
    'eu-findtextrel',
    'eu-nm',
    'eu-objdump',
    'eu-ranlib',
    'eu-readelf',
    'eu-size',
    'eu-stack',
    'eu-strings',
    'eu-strip',
    'eu-unstrip',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2',
    'tukaani.org/xz',
    'zlib.net',
    'facebook.com/zstd',
    'linuxkernel.org/linux-headers',
    'kernel.org/linux-headers',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.193.0',
    '0.192.0',
    '0.191.0',
    '0.190.0',
    '0.189.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'elfutils.org' as const,
}

export type ElfutilsorgPackage = typeof elfutilsorgPackage
