/**
 * **clang-format** - Package from pantry: llvm.org/clang-format
 *
 * @domain `llvm.org/clang-format`
 *
 * @install `launchpad install llvm.org/clang-format`
 * @dependencies `gnome.org/libxml2`, `invisible-island.net/ncurses`, `python.org<3.12`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.llvmorgclangformat
 * console.log(pkg.name)        // "clang-format"
 * console.log(pkg.description) // "Package from pantry: llvm.org/clang-format"
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
  description: 'Package from pantry: llvm.org/clang-format' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install llvm.org/clang-format' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +llvm.org/clang-format -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install llvm.org/clang-format' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/llvm.org/clang-format/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LlvmorgclangformatPackage = typeof llvmorgclangformatPackage
