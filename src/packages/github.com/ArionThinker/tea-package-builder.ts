/**
 * **tea-package-builder** - Package from pantry: github.com/ArionThinker/tea-package-builder
 *
 * @domain `github.com/ArionThinker/tea-package-builder`
 *
 * @install `launchpad install github.com/ArionThinker/tea-package-builder`
 * @dependencies `linux:ffmpeg.org`, `linux:gnome.org/gobject-introspection`, `linux:gnome.org/glib^2` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomarionthinkerteapackagebuilder
 * console.log(pkg.name)        // "tea-package-builder"
 * console.log(pkg.description) // "Package from pantry: github.com/ArionThinker/te..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ArionThinker/tea-package-builder.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomarionthinkerteapackagebuilderPackage = {
  /**
   * The display name of this package.
   */
  name: 'tea-package-builder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ArionThinker/tea-package-builder' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ArionThinker/tea-package-builder' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ArionThinker/tea-package-builder' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ArionThinker/tea-package-builder -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ArionThinker/tea-package-builder' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:ffmpeg.org',
    'linux:gnome.org/gobject-introspection',
    'linux:gnome.org/glib^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ArionThinker/tea-package-builder/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomarionthinkerteapackagebuilderPackage = typeof githubcomarionthinkerteapackagebuilderPackage
