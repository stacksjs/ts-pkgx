/**
 * **libsixel** - Package from pantry: github.com/libsixel/libsixel
 *
 * @domain `github.com/libsixel/libsixel`
 *
 * @install `launchpad install github.com/libsixel/libsixel`
 * @dependencies `libjpeg-turbo.org`, `libpng.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlibsixellibsixel
 * console.log(pkg.name)        // "libsixel"
 * console.log(pkg.description) // "Package from pantry: github.com/libsixel/libsixel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libsixel/libsixel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlibsixellibsixelPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsixel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libsixel/libsixel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/libsixel/libsixel' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/libsixel/libsixel' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/libsixel/libsixel -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/libsixel/libsixel' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org',
    'libpng.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libsixel/libsixel/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlibsixellibsixelPackage = typeof githubcomlibsixellibsixelPackage
