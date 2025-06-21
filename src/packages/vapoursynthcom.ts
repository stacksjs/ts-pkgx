/**
 * **vapoursynth.com** - Package from pantry: vapoursynth.com
 *
 * @domain `vapoursynth.com`
 *
 * @install `launchpad install vapoursynth.com`
 * @dependencies `python.org~3.11`, `github.com/sekrit-twc/zimg`, `linux:gnu.org/gcc/libstdcxx` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vapoursynthcom
 * console.log(pkg.name)        // "vapoursynth.com"
 * console.log(pkg.description) // "Package from pantry: vapoursynth.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vapoursynth-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vapoursynthcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'vapoursynth.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vapoursynth.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vapoursynth.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vapoursynth.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'python.org~3.11',
    'github.com/sekrit-twc/zimg',
    'linux:gnu.org/gcc/libstdcxx',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vapoursynth.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VapoursynthcomPackage = typeof vapoursynthcomPackage
