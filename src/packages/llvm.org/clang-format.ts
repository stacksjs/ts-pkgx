/**
 * **clang-format** - The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.
 *
 * @domain `llvm.org/clang-format`
 * @programs `clang-format`, `git-clang-format`
 * @version `20.1.7` (33 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +llvm.org/clang-format -- $SHELL -i`
 * @dependencies `gnome.org/libxml2`, `invisible-island.net/ncurses`, `python.org<3.12`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.llvmorgclangformat
 * console.log(pkg.name)        // "clang-format"
 * console.log(pkg.description) // "The LLVM Project is a collection of modular and..."
 * console.log(pkg.programs)    // ["clang-format", "git-clang-format"]
 * console.log(pkg.versions[0]) // "20.1.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/llvm-org/clang-format.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const llvmorgclangformatPackage = {
  /**
   * The display name of this package.
   */
  name: 'clang-format' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'llvm.org/clang-format' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/llvm.org/clang-format/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +llvm.org/clang-format -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'clang-format',
    'git-clang-format',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
    'invisible-island.net/ncurses',
    'python.org<3.12',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20.1.7',
    '20.1.6',
    '20.1.5',
    '20.1.4',
    '20.1.3',
    '20.1.2',
    '20.1.1',
    '20.1.0',
    '19.1.7',
    '19.1.6',
    '19.1.5',
    '19.1.4',
    '19.1.3',
    '19.1.2',
    '19.1.1',
    '19.1.0',
    '18.1.8',
    '18.1.7',
    '18.1.6',
    '18.1.5',
    '18.1.4',
    '18.1.3',
    '18.1.2',
    '18.1.1',
    '18.1.0',
    '17.0.6',
    '17.0.5',
    '17.0.4',
    '17.0.3',
    '17.0.2',
    '17.0.1',
    '17.0.0',
    '16.0.6',
  ] as const,
  aliases: [] as const,
}

export type LlvmorgclangformatPackage = typeof llvmorgclangformatPackage
