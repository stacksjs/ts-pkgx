/**
 * **localai.io** - Package from pantry: localai.io
 *
 * @domain `localai.io`
 *
 * @install `launchpad install localai.io`
 * @dependencies `darwin:openmp.llvm.org@18` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.localaiio
 * console.log(pkg.name)        // "localai.io"
 * console.log(pkg.description) // "Package from pantry: localai.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/localai-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const localaiioPackage = {
  /**
   * The display name of this package.
   */
  name: 'localai.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'localai.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: localai.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install localai.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +localai.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install localai.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:openmp.llvm.org@18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/localai.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LocalaiioPackage = typeof localaiioPackage
