/**
 * **musl.libc.org** - pkgx package
 *
 * @domain `musl.libc.org`
 * @programs `ld.musl-clang`, `musl-clang`
 * @version `1.2.3` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/musl-libc-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +musl.libc.org -- $SHELL -i`
 * @dependencies `llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musllibcorg
 * console.log(pkg.name)        // "musl.libc.org"
 * console.log(pkg.programs)    // ["ld.musl-clang", "musl-clang"]
 * console.log(pkg.versions[0]) // "1.2.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musl-libc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musllibcorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'musl.libc.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musl.libc.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musl.libc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +musl.libc.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ld.musl-clang',
    'musl-clang',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'llvm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.3',
  ] as const,
  aliases: [] as const,
  fullPath: 'musl.libc.org' as const,
}

export type MusllibcorgPackage = typeof musllibcorgPackage
