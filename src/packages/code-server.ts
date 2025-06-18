/**
 * **code-server** - Access VS Code through the browser
 *
 * @domain `coder.com/code-server`
 * @programs `code-server`
 * @version `4.100.3` (36 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/coder-com/code-server.md
 *
 * @install `sh <(curl https://pkgx.sh) code-server`
 * @name `code-server`
 * @dependencies `nodejs.org@20`, `linuxgnome.org/libsecret^0.21x.org/x11^1.8x.org/xkbfile^1.1kerberos.org^1.21`, `gnome.org/libsecret^0.21`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.codeserver
 * // Or access via domain
 * const samePkg = pantry.codercomcodeserver
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "code-server"
 * console.log(pkg.description) // "Access VS Code through the browser"
 * console.log(pkg.programs)    // ["code-server"]
 * console.log(pkg.versions[0]) // "4.100.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coder-com/code-server.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codeserverPackage = {
  /**
   * The display name of this package.
   */
  name: 'code-server' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'coder.com/code-server' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Access VS Code through the browser' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/coder.com/code-server/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) code-server' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'code-server',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org@20',
    'linuxgnome.org/libsecret^0.21x.org/x11^1.8x.org/xkbfile^1.1kerberos.org^1.21',
    'gnome.org/libsecret^0.21',
    'x.org/x11^1.8',
    'x.org/xkbfile^1.1',
    'kerberos.org^1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.100.3',
    '4.100.2',
    '4.100.1',
    '4.100.0',
    '4.99.4',
    '4.99.3',
    '4.99.2',
    '4.99.1',
    '4.99.0',
    '4.98.2',
    '4.98.0',
    '4.97.2',
    '4.96.4',
    '4.96.2',
    '4.96.1',
    '4.95.3',
    '4.95.2',
    '4.95.1',
    '4.93.1',
    '4.92.2',
    '4.91.1',
    '4.91.0',
    '4.90.3',
    '4.90.2',
    '4.90.1',
    '4.90.0',
    '4.89.1',
    '4.89.0',
    '4.23.1',
    '4.23.0',
    '4.22.1',
    '4.22.0',
    '4.21.2',
    '4.21.1',
    '4.21.0',
    '4.20.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'coder.com/code-server' as const,
}

export type CodeserverPackage = typeof codeserverPackage
