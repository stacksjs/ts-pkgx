/**
 * **ginkgo** - Package from pantry: onsi.github.io/ginkgo
 *
 * @domain `onsi.github.io/ginkgo`
 *
 * @install `launchpad install onsi.github.io/ginkgo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.onsigithubioginkgo
 * console.log(pkg.name)        // "ginkgo"
 * console.log(pkg.description) // "Package from pantry: onsi.github.io/ginkgo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/onsi-github-io/ginkgo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const onsigithubioginkgoPackage = {
  /**
   * The display name of this package.
   */
  name: 'ginkgo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'onsi.github.io/ginkgo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: onsi.github.io/ginkgo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install onsi.github.io/ginkgo' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +onsi.github.io/ginkgo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install onsi.github.io/ginkgo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/onsi.github.io/ginkgo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OnsigithubioginkgoPackage = typeof onsigithubioginkgoPackage
