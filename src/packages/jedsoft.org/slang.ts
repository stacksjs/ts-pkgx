/**
 * **slang** - Package from pantry: jedsoft.org/slang
 *
 * @domain `jedsoft.org/slang`
 *
 * @install `launchpad install jedsoft.org/slang`
 * @dependencies `libpng.org`, `linux:pcre.org` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jedsoftorgslang
 * console.log(pkg.name)        // "slang"
 * console.log(pkg.description) // "Package from pantry: jedsoft.org/slang"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jedsoft-org/slang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jedsoftorgslangPackage = {
  /**
   * The display name of this package.
   */
  name: 'slang' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jedsoft.org/slang' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jedsoft.org/slang' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jedsoft.org/slang' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jedsoft.org/slang -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jedsoft.org/slang' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libpng.org',
    'linux:pcre.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jedsoft.org/slang/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JedsoftorgslangPackage = typeof jedsoftorgslangPackage
