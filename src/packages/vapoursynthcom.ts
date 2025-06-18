/**
 * **vapoursynth.com** - Package from pantry: vapoursynth.com
 *
 * @domain `vapoursynth.com`
 *
 * @install `launchpad install vapoursynth.com`
 * @dependencies `python.org~3.11`, `github.com/sekrit-twc/zimg`, `gnu.org/gcc/libstdcxx`, ... (+8 more)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vapoursynth.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'github.com/sekrit-twc/zimg',
    'gnu.org/gcc/libstdcxx',
    'gnu.org/autoconf',
    'gnu.org/automake',
    'cython.org',
    'gnu.org/libtool',
    'nasm.us',
    'freedesktop.org/pkg-config',
    'gnu.org/gcc',
    'crates.io/semverator',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vapoursynth.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VapoursynthcomPackage = typeof vapoursynthcomPackage
