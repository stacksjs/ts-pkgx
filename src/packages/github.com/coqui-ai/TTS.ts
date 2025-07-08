/**
 * **TTS** - Package from pantry: github.com/coqui-ai/TTS
 *
 * @domain `github.com/coqui-ai/TTS`
 *
 * @install `launchpad install github.com/coqui-ai/TTS`
 * @dependencies `python.org>=3.7<3.11`, `taku910.github.io/mecab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcoquiaitts
 * console.log(pkg.name)        // "TTS"
 * console.log(pkg.description) // "Package from pantry: github.com/coqui-ai/TTS"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/coqui-ai/TTS.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcoquiaittsPackage = {
  /**
   * The display name of this package.
   */
  name: 'TTS' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/coqui-ai/TTS' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/coqui-ai/TTS' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/coqui-ai/TTS' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/coqui-ai/TTS -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/coqui-ai/TTS' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.11',
    'taku910.github.io/mecab',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/coqui-ai/TTS/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcoquiaittsPackage = typeof githubcomcoquiaittsPackage
