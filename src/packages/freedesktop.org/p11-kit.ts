/**
 * **freedesktop.org/p11-kit** - Provides a way to load and enumerate PKCS#11 modules.
 *
 * @domain `freedesktop.org/p11-kit`
 * @programs `p11-kit`, `trust`
 * @version `0.25.9` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install freedesktop.org/p11-kit`
 * @dependencies `sourceware.org/libffi^3`, `curl.se/ca-certs`, `gnu.org/libtasn1^4`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgp11kit
 * console.log(pkg.name)        // "freedesktop.org/p11-kit"
 * console.log(pkg.description) // "Provides a way to load and enumerate PKCS#11 mo..."
 * console.log(pkg.programs)    // ["p11-kit", "trust"]
 * console.log(pkg.versions[0]) // "0.25.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/p11-kit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgp11kitPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/p11-kit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/p11-kit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Provides a way to load and enumerate PKCS#11 modules.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/p11-kit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/p11-kit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'p11-kit',
    'trust',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/libffi^3',
    'curl.se/ca-certs',
    'gnu.org/libtasn1^4',
    'gnu.org/gettext',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.25.9',
    '0.25.8',
    '0.25.7',
    '0.25.6',
    '0.25.5',
    '0.25.4',
    '0.25.3',
    '0.25.2',
    '0.25.1',
    '0.25.0',
    '0.24.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/p11-kit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/p11-kit' as const,
}

export type Freedesktoporgp11kitPackage = typeof freedesktoporgp11kitPackage
