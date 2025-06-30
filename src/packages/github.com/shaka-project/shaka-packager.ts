/**
 * **shaka-packager** - Package from pantry: github.com/shaka-project/shaka-packager
 *
 * @domain `github.com/shaka-project/shaka-packager`
 *
 * @install `launchpad install github.com/shaka-project/shaka-packager`
 * @dependencies `linux:gnu.org/gcc/libstdcxx` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomshakaprojectshakapackager
 * console.log(pkg.name)        // "shaka-packager"
 * console.log(pkg.description) // "Package from pantry: github.com/shaka-project/s..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/shaka-project/shaka-packager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomshakaprojectshakapackagerPackage = {
  /**
   * The display name of this package.
   */
  name: 'shaka-packager' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/shaka-project/shaka-packager' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/shaka-project/shaka-packager' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/shaka-project/shaka-packager' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/shaka-project/shaka-packager -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/shaka-project/shaka-packager' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnu.org/gcc/libstdcxx',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/shaka-project/shaka-packager/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomshakaprojectshakapackagerPackage = typeof githubcomshakaprojectshakapackagerPackage
