/**
 * **intltool** - Package from pantry: freedesktop.org/intltool
 *
 * @domain `freedesktop.org/intltool`
 *
 * @install `launchpad install freedesktop.org/intltool`
 * @dependencies `perl.org~5`, `linux:libexpat.github.io^2.6` (includes OS-specific dependencies with `os:package` format)
 * @companions `PERL5LIB^${{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgintltool
 * console.log(pkg.name)        // "intltool"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/intltool"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/intltool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgintltoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'intltool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/intltool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/intltool' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/intltool' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/intltool -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/intltool' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^${{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'perl.org~5',
    'linux:libexpat.github.io^2.6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/intltool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgintltoolPackage = typeof freedesktoporgintltoolPackage
