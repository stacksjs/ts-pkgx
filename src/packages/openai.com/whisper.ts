/**
 * **whisper** - Package from pantry: openai.com/whisper
 *
 * @domain `openai.com/whisper`
 *
 * @install `launchpad install openai.com/whisper`
 * @dependencies `python.org~3.11`, `ffmpeg.org^6.1`, `huggingface.co^0.19`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openaicomwhisper
 * console.log(pkg.name)        // "whisper"
 * console.log(pkg.description) // "Package from pantry: openai.com/whisper"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openai-com/whisper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openaicomwhisperPackage = {
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
  description: 'Package from pantry: openai.com/whisper' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openai.com/whisper' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openai.com/whisper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openai.com/whisper' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openai.com/whisper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenaicomwhisperPackage = typeof openaicomwhisperPackage
