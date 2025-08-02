/**
 * **whisper.cpp** - Package from pantry: github.com/ggerganov/whisper.cpp
 *
 * @domain `github.com/ggerganov/whisper.cpp`
 *
 * @install `launchpad install github.com/ggerganov/whisper.cpp`
 * @dependencies `libsdl.org`, `linux:openmp.llvm.org^18 # as of 1.7.0`, `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomggerganovwhispercpp
 * console.log(pkg.name)        // "whisper.cpp"
 * console.log(pkg.description) // "Package from pantry: github.com/ggerganov/whisp..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ggerganov/whisper-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomggerganovwhispercppPackage = {
  /**
   * The display name of this package.
   */
  name: 'whisper.cpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ggerganov/whisper.cpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ggerganov/whisper.cpp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ggerganov/whisper.cpp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ggerganov/whisper.cpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ggerganov/whisper.cpp' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libsdl.org',
    'linux:openmp.llvm.org^18 # as of 1.7.0',
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ggerganov/whisper.cpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomggerganovwhispercppPackage = typeof githubcomggerganovwhispercppPackage
