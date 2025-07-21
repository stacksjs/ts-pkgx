/**
 * **heif-converter-image** - Package from pantry: github.com/MaestroError/heif-converter-image
 *
 * @domain `github.com/MaestroError/heif-converter-image`
 *
 * @install `launchpad install github.com/MaestroError/heif-converter-image`
 * @dependencies `github.com/strukturag/libheif`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommaestroerrorheifconverterimage
 * console.log(pkg.name)        // "heif-converter-image"
 * console.log(pkg.description) // "Package from pantry: github.com/MaestroError/he..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MaestroError/heif-converter-image.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommaestroerrorheifconverterimagePackage = {
  /**
   * The display name of this package.
   */
  name: 'heif-converter-image' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MaestroError/heif-converter-image' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/MaestroError/heif-converter-image' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/MaestroError/heif-converter-image' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/MaestroError/heif-converter-image -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/MaestroError/heif-converter-image' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/strukturag/libheif',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/MaestroError/heif-converter-image/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommaestroerrorheifconverterimagePackage = typeof githubcommaestroerrorheifconverterimagePackage
