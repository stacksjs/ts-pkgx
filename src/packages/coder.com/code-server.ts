/**
 * **code-server** - Package from pantry: coder.com/code-server
 *
 * @domain `coder.com/code-server`
 *
 * @install `launchpad install coder.com/code-server`
 * @dependencies `nodejs.org^22 # since 4.101.0`, `linux:gnome.org/libsecret^0.21`, `linux:x.org/x11^1.8`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.codercomcodeserver
 * console.log(pkg.name)        // "code-server"
 * console.log(pkg.description) // "Package from pantry: coder.com/code-server"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coder-com/code-server.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codercomcodeserverPackage = {
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
  description: 'Package from pantry: coder.com/code-server' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install coder.com/code-server' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +coder.com/code-server -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install coder.com/code-server' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'nodejs.org^22 # since 4.101.0',
    'linux:gnome.org/libsecret^0.21',
    'linux:x.org/x11^1.8',
    'linux:x.org/xkbfile^1.1',
    'linux:kerberos.org^1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/coder.com/code-server/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CodercomcodeserverPackage = typeof codercomcodeserverPackage
