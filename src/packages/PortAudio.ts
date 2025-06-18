/**
 * **PortAudio** - PortAudio is a cross-platform, open-source C language library for real-time audio input and output.
 *
 * @domain `portaudio.com`
 * @version `19.7.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +portaudio.com -- $SHELL -i`
 * @name `PortAudio`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.PortAudio
 * // Or access via domain
 * const samePkg = pantry.portaudiocom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "PortAudio"
 * console.log(pkg.description) // "PortAudio is a cross-platform, open-source C la..."
 * console.log(pkg.versions[0]) // "19.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/portaudio-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const portAudioPackage = {
  /**
   * The display name of this package.
   */
  name: 'PortAudio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'portaudio.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'PortAudio is a cross-platform, open-source C language library for real-time audio input and output.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/portaudio.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +portaudio.com -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '19.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'portaudio.com' as const,
}

export type PortAudioPackage = typeof portAudioPackage
