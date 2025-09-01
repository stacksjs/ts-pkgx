/**
 * **istio.io** - pkgx package
 *
 * @domain `istio.io`
 *
 * @install `launchpad install istio.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.istioio
 * console.log(pkg.name)        // "istio.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/istio-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const istioioPackage = {
  /**
   * The display name of this package.
   */
  name: 'istio.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'istio.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/istio/istio' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install istio.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +istio.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install istio.io' as const,
}

export type IstioioPackage = typeof istioioPackage
