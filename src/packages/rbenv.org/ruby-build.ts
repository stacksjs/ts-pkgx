/**
 * **ruby-build** - Package from pantry: rbenv.org/ruby-build
 *
 * @domain `rbenv.org/ruby-build`
 *
 * @install `launchpad install rbenv.org/ruby-build`
 * @dependencies `openssl.org>=1.1`, `curl.se`, `gnu.org/autoconf^2.72`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rbenvorgrubybuild
 * console.log(pkg.name)        // "ruby-build"
 * console.log(pkg.description) // "Package from pantry: rbenv.org/ruby-build"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rbenv-org/ruby-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rbenvorgrubybuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruby-build' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rbenv.org/ruby-build' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rbenv.org/ruby-build' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rbenv.org/ruby-build' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rbenv.org/ruby-build -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rbenv.org/ruby-build' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org>=1.1',
    'curl.se',
    'gnu.org/autoconf^2.72',
    'freedesktop.org/pkg-config',
    'gnu.org/readline^8.2',
    'pyyaml.org/libyaml^0.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rbenv.org/ruby-build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RbenvorgrubybuildPackage = typeof rbenvorgrubybuildPackage
