/**
 * **vanna.ai** - Package from pantry: vanna.ai
 *
 * @domain `vanna.ai`
 *
 * @install `launchpad install vanna.ai`
 * @dependencies `python.org~3.12`, `linux:openmp.llvm.org^17 # needed by chromadb` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vannaai
 * console.log(pkg.name)        // "vanna.ai"
 * console.log(pkg.description) // "Package from pantry: vanna.ai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vanna-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vannaaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'vanna.ai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vanna.ai' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vanna.ai' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vanna.ai' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'python.org~3.12',
    'linux:openmp.llvm.org^17 # needed by chromadb',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vanna.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VannaaiPackage = typeof vannaaiPackage
