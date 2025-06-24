/**
 * **elfutils.org** - Package from pantry: elfutils.org
 *
 * @domain `elfutils.org`
 *
 * @install `launchpad install elfutils.org`
 * @dependencies `sourceware.org/bzip2`, `tukaani.org/xz`, `zlib.net`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elfutilsorg
 * console.log(pkg.name)        // "elfutils.org"
 * console.log(pkg.description) // "Package from pantry: elfutils.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elfutils-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elfutilsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'elfutils.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elfutils.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: elfutils.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install elfutils.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +elfutils.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install elfutils.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'sourceware.org/bzip2',
    'tukaani.org/xz',
    'zlib.net',
    'facebook.com/zstd',
    'linux:kernel.org/linux-headers',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elfutils.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ElfutilsorgPackage = typeof elfutilsorgPackage
