/**
 * **whisper** - Robust Speech Recognition via Large-Scale Weak Supervision
 *
 * @domain `openai.com/whisper`
 * @programs `whisper`
 * @version `20250625.0.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install whisper`
 * @name `whisper`
 * @dependencies `python.org~3.11`, `ffmpeg.org^6.1`, `huggingface.co^0.19`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.whisper
 * // Or access via domain
 * const samePkg = pantry.openaicomwhisper
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "whisper"
 * console.log(pkg.description) // "Robust Speech Recognition via Large-Scale Weak ..."
 * console.log(pkg.programs)    // ["whisper"]
 * console.log(pkg.versions[0]) // "20250625.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openai-com/whisper.md
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
  domain: 'openai.com/whisper' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Robust Speech Recognition via Large-Scale Weak Supervision' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openai.com/whisper/package.yml' as const,
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
    'whisper',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'ffmpeg.org^6.1',
    'huggingface.co^0.19',
    'pyyaml.org^0.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20250625.0.0',
    '20240930.0.0',
    '20240927.0.0',
    '20231117.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) whisper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install whisper' as const,
}

export type WhisperPackage = typeof whisperPackage
