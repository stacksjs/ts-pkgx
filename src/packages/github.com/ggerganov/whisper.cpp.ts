/**
 * **whisper** - Port of OpenAI's Whisper model in C/C++
 *
 * @domain `github.com/ggerganov/whisper.cpp`
 * @programs `whisper.cpp`, `whisper-cli`
 * @version `1.7.5` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install whisper`
 * @name `whisper`
 * @dependencies `libsdl.org`, `linux:openmp.llvm.org^18 # as of 1.7.0`, `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 * @companions `huggingface.co`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.whisper
 * // Or access via domain
 * const samePkg = pantry.githubcomggerganovwhispercpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "whisper"
 * console.log(pkg.description) // "Port of OpenAI's Whisper model in C/C++"
 * console.log(pkg.programs)    // ["whisper.cpp", "whisper-cli"]
 * console.log(pkg.versions[0]) // "1.7.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ggerganov/whisper-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const whisperPackage = {
  /**
   * The display name of this package.
   */
  name: 'whisper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ggerganov/whisper.cpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Port of OpenAI\'s Whisper model in C/C++' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ggerganov/whisper.cpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install whisper' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'whisper.cpp',
    'whisper-cli',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'huggingface.co',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.5',
    '1.7.4',
    '1.7.3',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.2',
    '1.6.1',
    '1.6.0',
    '1.5.5',
    '1.5.4',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.3',
    '1.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ggerganov/whisper.cpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install whisper' as const,
}

export type WhisperPackage = typeof whisperPackage
