/**
 * **opj_compress** - Official repository of the OpenJPEG project
 *
 * @domain `openjpeg.org`
 * @programs `opj_compress`, `opj_decompress`, `opj_dump`
 * @version `2.5.3` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install openjpeg.org`
 * @dependencies `libpng.org^1`, `simplesystems.org/libtiff^4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openjpegorg
 * console.log(pkg.name)        // "opj_compress"
 * console.log(pkg.description) // "Official repository of the OpenJPEG project"
 * console.log(pkg.programs)    // ["opj_compress", "opj_decompress", ...]
 * console.log(pkg.versions[0]) // "2.5.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openjpeg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openjpegorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opj_compress' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openjpeg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official repository of the OpenJPEG project' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openjpeg.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openjpeg.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'opj_compress',
    'opj_decompress',
    'opj_dump',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org^1',
    'simplesystems.org/libtiff^4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.3',
    '2.5.2',
    '2.5.1',
    '2.5.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openjpeg.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openjpeg.org' as const,
}

export type OpenjpegorgPackage = typeof openjpegorgPackage
