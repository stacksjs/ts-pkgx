/**
 * **libffi** - A portable foreign-function interface library.
 *
 * @domain `sourceware.org/libffi`
 * @version `3.5.1` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +sourceware.org/libffi -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourcewareorglibffi
 * console.log(pkg.name)        // "libffi"
 * console.log(pkg.description) // "A portable foreign-function interface library."
 * console.log(pkg.versions[0]) // "3.5.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceware-org/libffi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourcewareorglibffiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libffi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceware.org/libffi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A portable foreign-function interface library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/libffi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +sourceware.org/libffi -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.1',
    '3.5.0',
    '3.4.8',
    '3.4.7',
    '3.4.6',
    '3.4.5',
    '3.4.4',
    '3.4.3',
  ] as const,
  aliases: [] as const,
}

export type SourcewareorglibffiPackage = typeof sourcewareorglibffiPackage
