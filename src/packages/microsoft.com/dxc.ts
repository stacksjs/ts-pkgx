/**
 * **dxc** - This repo hosts the source for the DirectX Shader Compiler which is based on LLVM/Clang.
 *
 * @domain `microsoft.com/dxc`
 * @programs `dxc`, `dxv`, `dxa`, `dxr`, `dxl`
 * @version `1.8.2505` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +microsoft.com/dxc -- $SHELL -i`
 * @aliases `dxc`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.dxc
 * // Or access via domain
 * const samePkg = pantry.microsoftcomdxc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "microsoft.com/dxc"
 * console.log(pkg.description) // "This repo hosts the source for the DirectX Shad..."
 * console.log(pkg.programs)    // ["dxc", "dxv", ...]
 * console.log(pkg.versions[0]) // "1.8.2505" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/dxc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dxcPackage = {
  /**
   * The display name of this package.
   */
  name: 'microsoft.com/dxc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/dxc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'This repo hosts the source for the DirectX Shader Compiler which is based on LLVM/Clang.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/dxc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +microsoft.com/dxc -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dxc',
    'dxv',
    'dxa',
    'dxr',
    'dxl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.2505',
    '1.8.2502',
    '1.8.2407',
    '1.8.2405',
    '1.8.2403.2',
    '1.8.2403.1',
    '1.8.2403',
    '1.7.2308',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'dxc',
  ] as const,
  fullPath: 'microsoft.com/dxc' as const,
}

export type DxcPackage = typeof dxcPackage
