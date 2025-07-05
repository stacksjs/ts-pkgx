/**
 * **tldr.sh** - Package from pantry: tldr.sh
 *
 * @domain `tldr.sh`
 *
 * @install `launchpad install tldr.sh`
 * @dependencies `linux:sourceware.org/bzip2^1`, `curl.se` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tldrsh
 * console.log(pkg.name)        // "tldr.sh"
 * console.log(pkg.description) // "Package from pantry: tldr.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tldr-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tldrshPackage = {
  /**
   * The display name of this package.
   */
  name: 'tldr.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tldr.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tldr.sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tldr.sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tldr.sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tldr.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:sourceware.org/bzip2^1',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tldr.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TldrshPackage = typeof tldrshPackage
