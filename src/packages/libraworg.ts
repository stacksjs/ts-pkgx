/**
 * **libraw.org** - Package from pantry: libraw.org
 *
 * @domain `libraw.org`
 *
 * @install `launchpad install libraw.org`
 * @dependencies `github.com/jasper-software/jasper`, `libjpeg-turbo.org`, `littlecms.com`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libraworg
 * console.log(pkg.name)        // "libraw.org"
 * console.log(pkg.description) // "Package from pantry: libraw.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libraw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libraworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libraw.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libraw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libraw.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libraw.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libraw.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libraw.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'github.com/jasper-software/jasper',
    'libjpeg-turbo.org',
    'littlecms.com',
    'zlib.net',
    'darwin:openmp.llvm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libraw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibraworgPackage = typeof libraworgPackage
