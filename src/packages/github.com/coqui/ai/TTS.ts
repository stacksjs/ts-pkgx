/**
 * **github.com/coqui-ai/TTS** - pkgx package
 *
 * @domain `github.com/coqui/ai/TTS`
 *
 * @install `pkgx github.com/coqui-ai/TTS`
 * @aliases `github.com/coqui-ai/TTS`, `coqui-ai/TTS`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcoquiaiTTS
 * // Or access via domain
 * const samePkg = pantry.githubcomcoquiaitts
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "coqui-ai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/coqui/ai/TTS.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcoquiaiTTSPackage = {
  /**
   * The display name of this package.
   */
  name: 'coqui-ai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/coqui/ai/TTS' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/coqui-ai/TTS' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/coqui-ai/TTS',
    'coqui-ai/TTS',
  ] as const,
  fullPath: 'github.com/coqui-ai/TTS' as const,
}

export type GithubcomcoquiaiTTSPackage = typeof githubcomcoquiaiTTSPackage
