/**
 * **liblinear** - LIBLINEAR -- A Library for Large Linear Classification
 *
 * @domain `csie.ntu.edu.tw/cjlin/liblinear`
 * @programs `predict`, `train`
 * @version `2.49.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +csie.ntu.edu.tw/cjlin/liblinear -- $SHELL -i`
 * @name `liblinear`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.liblinear
 * // Or access via domain
 * const samePkg = pantry.csientuedutwcjlinliblinear
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "liblinear"
 * console.log(pkg.description) // "LIBLINEAR -- A Library for Large Linear Classif..."
 * console.log(pkg.programs)    // ["predict", "train"]
 * console.log(pkg.versions[0]) // "2.49.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/csie-ntu-edu-tw/cjlin/liblinear.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liblinearPackage = {
  /**
   * The display name of this package.
   */
  name: 'liblinear' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'csie.ntu.edu.tw/cjlin/liblinear' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'LIBLINEAR -- A Library for Large Linear Classification' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/csie.ntu.edu.tw/cjlin/liblinear/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +csie.ntu.edu.tw/cjlin/liblinear -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'predict',
    'train',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.49.0',
    '2.48.0',
    '2.47.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LiblinearPackage = typeof liblinearPackage
