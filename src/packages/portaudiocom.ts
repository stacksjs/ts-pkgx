/**
 * **portaudio.com** - Package from pantry: portaudio.com
 *
 * @domain `portaudio.com`
 *
 * @install `launchpad install portaudio.com`
 * @dependencies `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.portaudiocom
 * console.log(pkg.name)        // "portaudio.com"
 * console.log(pkg.description) // "Package from pantry: portaudio.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/portaudio-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const portaudiocomPackage = {
  /**
   * The display name of this package.
   */
  name: 'portaudio.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'portaudio.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: portaudio.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install portaudio.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/portaudio.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PortaudiocomPackage = typeof portaudiocomPackage
