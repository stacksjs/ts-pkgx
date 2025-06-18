/**
 * **tinygo** - Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM.
 *
 * @domain `tinygo.org`
 * @programs `tinygo`
 * @version `0.38.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tinygo`
 * @aliases `tinygo`
 * @dependencies `go.dev`, `go.dev^1.18`, `git-scm.org@2`, ... (+4 more)
 * @companions `llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tinygo
 * // Or access via domain
 * const samePkg = pantry.tinygoorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tinygo.org"
 * console.log(pkg.description) // "Go compiler for small places. Microcontrollers,..."
 * console.log(pkg.programs)    // ["tinygo"]
 * console.log(pkg.versions[0]) // "0.38.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tinygo-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tinygoPackage = {
  /**
   * The display name of this package.
   */
  name: 'tinygo.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tinygo.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tinygo.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/tinygo-org/tinygo' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tinygo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tinygo',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'llvm.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
    'go.dev^1.18',
    'git-scm.org@2',
    'cmake.org@3',
    'ninja-build.org@1',
    'nodejs.org',
    'python.org>=3.6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.38.0',
    '0.37.0',
    '0.36.0',
    '0.35.0',
    '0.34.0',
    '0.33.0',
    '0.32.0',
    '0.31.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tinygo',
  ] as const,
}

export type TinygoPackage = typeof tinygoPackage
