/**
 * **krew.sigs.k8s.io** - Package from pantry: krew.sigs.k8s.io
 *
 * @domain `krew.sigs.k8s.io`
 *
 * @install `launchpad install krew.sigs.k8s.io`
 * @dependencies `git-scm.org`, `go.dev^1.21`, `gnu.org/grep`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.krewsigsk8sio
 * console.log(pkg.name)        // "krew.sigs.k8s.io"
 * console.log(pkg.description) // "Package from pantry: krew.sigs.k8s.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/krew-sigs-k8s-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const krewsigsk8sioPackage = {
  /**
   * The display name of this package.
   */
  name: 'krew.sigs.k8s.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'krew.sigs.k8s.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: krew.sigs.k8s.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install krew.sigs.k8s.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
    'go.dev^1.21',
    'gnu.org/grep',
    'kubernetes.io/kubectl',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/krew.sigs.k8s.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Krewsigsk8sioPackage = typeof krewsigsk8sioPackage
